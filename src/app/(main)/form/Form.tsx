"use client";

import { useFormState } from "react-dom";
import FormSubmit from "./Button";
import { createPost, FormState } from "../../../actions/actions";
import { redirect, useRouter } from "next/navigation";

export default function Form() {
  const route = useRouter();
  const initialState: FormState = { success: false, error: [] };
  const [state, formAction] = useFormState(createPost, initialState);

  console.log(state);

  if (state.success) {
    route.push("/form/modal");
  }

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
        </p>
        <input type="text" id="title" name="title" />
        <p>
          <label htmlFor="content">Content</label>
        </p>
        <textarea id="content" name="content" rows={5} />
        <FormSubmit />
        {state.error && (
          <ul>
            {state.error.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
