import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import { Form } from "../components/form";
import Input from "../components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/button";
import ImageUploader from "../components/image-uploader";
import { useStore } from "zustand";
import bookStore from "../store/book.store";
import { QueryClient } from "@tanstack/react-query";

const formSchema = z.object({
	title: z.string({ message: "Title is required" }),
	description: z.string({ message: "Description is required " }),
	author: z.string({ message: "Author is required" }),
	cover: z.string({ message: "Cover image is required" }),
	publicationDate: z.string({ message: "Publication Date is required " }),
});

export const Route = createLazyFileRoute("/create")({
	component: CreatePage,
});

function CreatePage() {
	const { addBook } = useStore(bookStore);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const {
		formState: { errors },
	} = form;

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		addBook({ ...values, id: Math.floor(Math.random() * 10000) });
	};

	return (
		<>
			<Navbar />
			<div className="py-10" />

			<div className="max-w-xl mx-auto">
				<div className="title-wrapper mb-4">
					<p className="text-lg font-semibold">Submit new collection</p>
				</div>

				<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
					<Controller
						control={form.control}
						name="title"
						render={({ field }) => (
							<Form.FormField label="Title">
								<Input placeholder="Enter title" {...field} />
								{errors.title && (
									<Form.FormMessage message={errors.title.message as string} />
								)}
							</Form.FormField>
						)}
					/>

					<Controller
						control={form.control}
						name="author"
						render={({ field }) => (
							<Form.FormField label="Author">
								<Input placeholder="Enter author name" {...field} />
								{errors.author && (
									<Form.FormMessage message={errors.author.message as string} />
								)}
							</Form.FormField>
						)}
					/>

					<Controller
						control={form.control}
						name="description"
						render={({ field }) => (
							<Form.FormField label="Description">
								<Input placeholder="Enter description" {...field} />
								{errors.description && (
									<Form.FormMessage
										message={errors.description.message as string}
									/>
								)}
							</Form.FormField>
						)}
					/>

					<Controller
						control={form.control}
						name="publicationDate"
						render={({ field }) => {
							return (
								<Form.FormField label="Cover Image">
									<Input type="date" {...field} />

									{errors.publicationDate && (
										<Form.FormMessage
											message={errors.publicationDate.message as string}
										/>
									)}
								</Form.FormField>
							);
						}}
					/>

					<Controller
						control={form.control}
						name="cover"
						render={({ field }) => {
							return (
								<Form.FormField label="Cover Image">
									<ImageUploader onChange={field.onChange} />

									{errors.cover && (
										<Form.FormMessage
											message={errors.cover.message as string}
										/>
									)}
								</Form.FormField>
							);
						}}
					/>

					<Button type="submit" className="mt-4">
						Submit Book
					</Button>
				</form>
			</div>
		</>
	);
}
