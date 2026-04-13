import { CheckCircle, Phone } from 'lucide-react';
import { useLocation2 } from '@/contexts/LocationContext';

const FormSubmitted = () => {
  const { phoneLink, phoneFormatted } = useLocation2();

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full animate-fade-in">
        <div className="bg-primary rounded-3xl p-10 md:p-14 shadow-2xl shadow-primary/20 text-center">
          {/* Check icon */}
          <div className="w-20 h-20 rounded-full bg-primary-foreground/15 flex items-center justify-center mx-auto mb-8 border-2 border-primary-foreground/20">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>

          <h1 className="font-sans text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
            Your Appointment Request Has Been Received!
          </h1>

          <p className="text-lg text-primary-foreground/90 font-semibold mb-2">
            Thank you for requesting your FREE estimate with Eagle Automatic Gate &amp; Door.
          </p>

          <p className="text-base text-primary-foreground/75 mb-8 leading-relaxed max-w-xl mx-auto">
            We're currently testing our new online scheduling system. One of our technicians will call you shortly to verify your details and confirm next steps. We appreciate your patience and apologize for any inconvenience.
          </p>

          <div className="text-left bg-primary-foreground/10 rounded-2xl p-6 md:p-8 mb-8 border border-primary-foreground/15">
            <p className="text-lg font-bold text-primary-foreground mb-4">What happens next:</p>
            <div className="space-y-3">
              <p className="flex items-start gap-3 text-primary-foreground/90 text-base">
                <span className="text-lg">✔️</span>
                We'll review your request and confirm a convenient appointment time
              </p>
              <p className="flex items-start gap-3 text-primary-foreground/90 text-base">
                <span className="text-lg">✔️</span>
                Our expert technician will assess your project needs
              </p>
              <p className="flex items-start gap-3 text-primary-foreground/90 text-base">
                <span className="text-lg">✔️</span>
                You'll receive a detailed estimate with the best solution for your property
              </p>
            </div>
          </div>

          <p className="text-primary-foreground/70 font-semibold text-base mb-4">Need help right away? Call us now</p>
          <a
            href={phoneLink}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-background text-foreground font-sans font-bold text-xl uppercase tracking-wide hover:bg-background/90 transition-colors shadow-lg"
          >
            <Phone className="w-6 h-6" />
            Call {phoneFormatted}
          </a>
        </div>
      </div>
    </main>
  );
};

export default FormSubmitted;
