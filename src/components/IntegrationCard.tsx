import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface IntegrationCardProps {
  name: string;
  icon: string;
  description: string;
}

export function IntegrationCard({ name, icon, description }: IntegrationCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex flex-col items-center text-center">
            <img src={icon} alt={name} className="w-12 h-12 mb-4" />
            <h3 className="font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-500 mb-4">{description}</p>
            <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium">
              Setup
            </Button>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <img src={icon} alt={name} className="w-6 h-6" />
            {name} Configuration
          </DialogTitle>
          <DialogDescription>
            Configure your {name} integration settings below.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {name === "Zapier" ? (
            <div className="grid gap-2">
              <label htmlFor="webhook-url" className="text-sm font-medium">
                Webhook URL
              </label>
              <input
                id="webhook-url"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your Zapier webhook URL"
              />
              <p className="text-sm text-muted-foreground">
                Enter the webhook URL from your Zapier integration.
              </p>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-muted-foreground">
                Configuration options for {name} will be available soon.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}