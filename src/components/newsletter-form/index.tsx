"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useActionState } from "@/lib/use-action-state";

import { Check } from "@/components/icons/check";
import { X } from "@/components/icons/x";
import { Loading } from "@/components/loading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { subscribeToNewsletter } from "./action";
import { schema } from "./schema";

export const NewsletterForm = () => {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, {
    message: "",
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  const isSuccess = state.message === "SUCCESS";
  const isError = state.message === "FAIL";

  useEffect(() => {
    if (isSuccess) {
      form.reset();
    }
  }, [form, isSuccess]);

  return (
    <Form {...form}>
      <form
        id="form-newsletter"
        className="mb-[100px] flex flex-col gap-[35px] px-[45px] py-[50px] text-white"
        ref={formRef}
        action={formAction}
        onSubmit={async (evt) => {
          evt.preventDefault();
          await form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(evt);
        }}
      >
        <h2 className="text-center text-[40px] font-bold sm:text-[72px] sm:leading-[88px]">
          Stay <span className="font-black">updated</span> with{" "}
          <span className="purple-text uppercase">Roam</span>
        </h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative mx-auto w-full max-w-[875px]">
              <FormControl>
                <input
                  {...field}
                  placeholder="Email Address"
                  className="flex h-16 w-full rounded-lg bg-roam-700/60 px-[35px] text-lg placeholder-[#8B8B8B] focus:outline-0"
                />
              </FormControl>
              <FormMessage className="pt-1 text-center text-sm font-light" />
              <p className="p-1 text-center text-sm font-light sm:leading-[32px]">
                By entering your email you agree to receive the ROAM newsletter.
                You can unsubscribe at any time. See our{" "}
                <Link href="/legal/privacy-policy" target="_blank">
                  privacy policy.
                </Link>
              </p>
              {isSuccess && (
                <Check className="absolute right-4 top-8 !mt-0 origin-center -translate-y-1/2 scale-75 lg:right-10" />
              )}
              {isError && (
                <X className="absolute right-4 top-8 !mt-0 origin-center -translate-y-1/2 scale-75 lg:right-10" />
              )}
            </FormItem>
          )}
        />
        <button className="mx-auto flex h-11 items-center justify-center rounded-lg bg-white px-[15px] text-lg font-semibold text-roam-700 transition-colors duration-300 hover:bg-[#D9D9D9] sm:h-[54px] sm:w-[242px] sm:text-[22px] sm:leading-[47px]">
          {pending ? (
            <Loading />
          ) : isSuccess ? (
            "Subscribed!"
          ) : isError ? (
            "Please Try Again."
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    </Form>
  );
};
