"use client"
import React, { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { toast } from "../ui/use-toast"
import { Slider } from "../ui/slider"

const FormSchema = z.object({
  token: z.string({
    required_error: "Select a token to connect",
  }),
})

export default function Tokenselect() {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0)
  const ethereumvalues: Array<number> = [0.1, 1, 10, 100]
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 relative"
      >
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token</FormLabel>
              <Select onValueChange={field.onChange} defaultValue="Eth">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue defaultValue="ETH" placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="overflow-hidden absolute z-100 bg-black">
                  <SelectItem value="Eth">ETH</SelectItem>
                  <SelectItem value="Starknet">STARK</SelectItem>
                  <SelectItem value="DAI">DAI</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Slider
          max={3}
          min={0}
          step={1}
          onValueChange={(value: number[]) => setCurrentSliderIndex(value[0])}
          className="bg-white"
        />
        current value: {ethereumvalues[currentSliderIndex]}
        {/* @ts-ignore */}
        <Button type="submit" className="bg-white w-full">
          Connect
        </Button>
      </form>
    </Form>
  )
}
