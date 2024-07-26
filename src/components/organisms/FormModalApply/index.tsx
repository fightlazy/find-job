"use client";

import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { formApplySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadFiled from "../UploadField";
import UploadField from "../UploadField";



interface FormModalApplyProps {}

const FormModalApply: FC<FormModalApplyProps> = ({}) => {
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });

  const onSubmit = (val: z.infer<typeof formApplySchema>) => {
    console.log(val);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg px-12 py-6">
          Apply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600]">
        <div>
          <div className="inline-flex items-center gap-4">
            <div>
              <Image
                src="/images/company2.png"
                alt="/images/company2.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <div className="text-lg font-semibold">
                Social Media Assistant
              </div>
              <div className="text-gray-500">
                Agency . Paris, France . Full-Time
              </div>
            </div>
          </div>

          <Separator className="my-5" />

          <div className="mb-5">
            <div className="font-semibold text-lg">Submit your applicant</div>
            <div className="text-gray-500 text-sm mt-2">
              The following is required and will only be shared with nomad
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter you full name" {...field} />
                      </FormControl>                  
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter you email" {...field} />
                      </FormControl>                  
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter you phone number" {...field} />
                      </FormControl>                  
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="previousJobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current of previous job title</FormLabel>
                      <FormControl>
                        <Input placeholder="what's your current of previous job title" {...field} />
                      </FormControl>                  
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              <h2 className="font-semibold">LINKS</h2>

              <div className="grid grid-cols-2 gap-6">
              <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Link to your linked url" {...field} />
                      </FormControl>                  
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                  control={form.control}
                  name="portofolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portofolio URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Link to your portofolio url" {...field} />
                      </FormControl>                  
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Add a cover letter or anything else you want to share" {...field} />
                      </FormControl>                  
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <UploadField form={form}/>
                <Button className="w-full">Apply</Button>

              <div></div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModalApply;
