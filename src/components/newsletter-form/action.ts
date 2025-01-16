"use server";

import mailchimp from "@mailchimp/mailchimp_marketing";

import { getNewsletterListId } from "@/lib/queries";

import { env } from "@/env";

import { schema } from "./schema";

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_KEY,
  server: env.MAILCHIMP_SERVER,
});

type FormState = {
  message: string;
};

export const subscribeToNewsletter = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const data = Object.fromEntries(formData);
  const parsed = await schema.safeParseAsync(data);

  if (!parsed.success) return { message: "FAIL" };

  try {
    const mailchimpListId = await getNewsletterListId();
    await mailchimp.lists.addListMember(mailchimpListId, {
      email_address: parsed.data.email,
      status: "subscribed",
    });
  } catch (e) {
    // @ts-ignore the mailchimp error response is not typed
    const text = e?.response?.text as string | undefined;
    const error = text ? JSON.parse(text) : undefined;
    if (error?.title !== "Member Exists") return { message: "FAIL" };
  }

  return { message: "SUCCESS" };
};
