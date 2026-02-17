import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Loader2, Calendar as CalendarIcon, Clock, Users, X, Check } from "lucide-react";

import { useBooking } from "@/contexts/BookingContext";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    contact: z.string().min(10, "Please enter a valid contact number"),
    date: z.date({
        required_error: "Please select a date",
    }),
    eventType: z.string().min(1, "Please select an event type"),
    startTime: z.string().min(1, "Please select start time"),
    endTime: z.string().min(1, "Please select end time"),
    guests: z.string().optional(),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const eventTypes = [
    "Wedding",
    "Engagement",
    "Reception",
    "Birthday Party",
    "Corporate Event",
    "Naming Ceremony",
    "Get-together",
    "Other",
];

const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    const ampm = hour < 12 ? "AM" : "PM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minute} ${ampm}`;
});

export default function BookingModal() {
    const { isOpen, closeBooking } = useBooking();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            contact: "",
            eventType: "",
            startTime: "",
            endTime: "",
            guests: "",
            message: "",
        },
    });

    const onSubmit = async (values: FormValues) => {
        setIsSubmitting(true);

        // Simulate API delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 800));

        const formattedDate = format(values.date, "PPP");

        const whatsappMessage = `Hi! I would like to inquire about booking Nandana Convention.
    
*Details:*
Name: ${values.name}
Phone: ${values.contact}
Date: ${formattedDate}
Time: ${values.startTime} to ${values.endTime}
Event: ${values.eventType}
Guests: ${values.guests ? values.guests : 'N/A'}

${values.message ? `Note: ${values.message}` : ''}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/919481250259?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
        setIsSubmitting(false);
        closeBooking();
        form.reset();
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeBooking}>
            <DialogContent className="sm:max-w-[500px] bg-card p-0 gap-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div className="bg-primary/10 p-6 flex flex-col items-center justify-center text-center border-b border-white/5">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3 text-primary">
                        <CalendarIcon className="w-6 h-6" />
                    </div>
                    <DialogTitle className="font-display text-2xl font-bold text-primary">Book Your Event</DialogTitle>
                    <DialogDescription className="text-muted-foreground mt-1">
                        Fill in the details to schedule your special day with us.
                    </DialogDescription>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} className="rounded-xl border-white/10 bg-secondary/5 focus:bg-background transition-colors" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="contact"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Contact Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Mobile number" {...field} className="rounded-xl border-white/10 bg-secondary/5 focus:bg-background transition-colors" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="eventType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Event Type</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="rounded-xl border-white/10 bg-secondary/5 focus:bg-background transition-colors">
                                                        <SelectValue placeholder="Select type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {eventTypes.map((type) => (
                                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Event Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={`w-full pl-3 text-left font-normal rounded-xl border-white/10 bg-secondary/5 hover:bg-secondary/10 ${!field.value && "text-muted-foreground"
                                                            }`}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="startTime"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Start Time</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="rounded-xl border-white/10 bg-secondary/5 focus:bg-background transition-colors">
                                                        <SelectValue placeholder="Start" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="max-h-56">
                                                    {timeOptions.map((time) => (
                                                        <SelectItem key={`start-${time}`} value={time}>{time}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="endTime"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>End Time</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="rounded-xl border-white/10 bg-secondary/5 focus:bg-background transition-colors">
                                                        <SelectValue placeholder="End" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="max-h-56">
                                                    {timeOptions.map((time) => (
                                                        <SelectItem key={`end-${time}`} value={time}>{time}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="guests"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Expected Guests (Optional)</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input placeholder="e.g. 500" {...field} className="pl-9 rounded-xl border-white/10 bg-secondary/5 focus:bg-background transition-colors" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/25 transition-all" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Redirecting...
                                    </>
                                ) : (
                                    "Proceed to WhatsApp"
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
