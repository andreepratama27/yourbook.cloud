import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import { Form } from "../components/form";
import Input from "../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/button";

const formSchema = z.object({
	title: z.string({ message: "Title is required" }),
	description: z.string({ message: "Description is required " }),
	author: z.string({ message: "Author is required" }),
});

export const Route = createLazyFileRoute("/create")({
	component: CreatePage,
});

function CreatePage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const {
		formState: { errors },
	} = form;

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log("fff", values);
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
					<Form.FormField label="Title">
						<Input
							placeholder="Enter title"
							onChange={(evt) => form.setValue("title", evt.target.value)}
						/>
						{errors.title && (
							<Form.FormMessage message={errors.title.message as string} />
						)}
					</Form.FormField>

					<Form.FormField label="Author">
						<Input
							placeholder="Enter author name"
							onChange={(evt) => form.setValue("author", evt.target.value)}
						/>
						{errors.author && (
							<Form.FormMessage message={errors.author.message as string} />
						)}
					</Form.FormField>

					<Form.FormField label="Description">
						<Input
							placeholder="Enter description"
							onChange={(evt) => form.setValue("description", evt.target.value)}
						/>
						{errors.description && (
							<Form.FormMessage
								message={errors.description.message as string}
							/>
						)}
					</Form.FormField>

					<Button type="submit" className="mt-4">
						Submit Book
					</Button>
				</form>
			</div>
		</>
	);
}
