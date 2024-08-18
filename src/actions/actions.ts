"use server";
import { redirect } from "next/navigation";

export interface FormState {
  success: boolean;
  error: string[];
}

export const createPost = async (state: FormState, formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  state.error = [];
  state.success = false;

  if (!title || title.trim().length === 0) {
    state.error.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    state.error.push("Content is required.");
  }

  if (!state.error.length) {
    state.success = true;
  }

  return state;
};
