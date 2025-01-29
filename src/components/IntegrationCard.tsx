import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

interface IntegrationCardProps {
  name: string;
  icon: string;
  description: string;
}

export function IntegrationCard({ name, icon, description }: IntegrationCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="flex flex-col items-center text-center">
            <img src={icon} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
            <h3 className="font-semibold mb-1.5 sm:mb-2 text-base sm:text-lg">{name}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{description}</p>
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary/80 font-medium text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2"
            >
              Setup
            </Button>
          </div>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="w-[95%] max-w-[425px] p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <img src={icon} alt={name} className="w-5 h-5 sm:w-6 sm:h-6" />
            {name} Configuration
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Configure your {name} integration settings below.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-3 sm:gap-4 py-3 sm:py-4">
          {name === "Zapier" ? (
            <div className="grid gap-2">
              <label htmlFor="webhook-url" className="text-sm font-medium">
                Webhook URL
              </label>
              <input
                id="webhook-url"
                className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-1.5 sm:py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your Zapier webhook URL"
              />
              <p className="text-xs sm:text-sm text-muted-foreground">
                Enter the webhook URL from your Zapier integration.
              </p>
            </div>
          ) : (
            <div className="text-center py-3 sm:py-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                Configuration options for {name} will be available soon.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-2 sm:mt-4">
          <Button variant="outline" type="button" className="text-sm h-8 sm:h-10">
            Cancel
          </Button>
          <Button type="submit" className="text-sm h-8 sm:h-10">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}