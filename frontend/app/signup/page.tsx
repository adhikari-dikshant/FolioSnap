import Link from "next/link";
import { Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PERKS = [
  "1 portfolio on the free plan",
  "All template previews",
  "No credit card required",
];

export default function SignupPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 dot-grid"
      style={{ background: "var(--color-base)" }}
    >
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center gap-2 mb-10">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: "var(--color-accent)" }}
          >
            <Zap className="w-4 h-4" style={{ color: "#0C0C11" }} />
          </div>
          <span className="font-semibold text-sm" style={{ color: "var(--color-text-primary)" }}>
            FolioSnap
          </span>
        </Link>

        <h1 className="font-display italic text-4xl mb-2" style={{ color: "var(--color-text-primary)" }}>
          Start for free.
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Create your account and go live in minutes.
        </p>

        <ul className="space-y-2 mb-8">
          {PERKS.map((perk) => (
            <li key={perk} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-accent)" }} />
              {perk}
            </li>
          ))}
        </ul>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
              Full name
            </label>
            <Input placeholder="Dikshant Singh" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
              Email
            </label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
              Password
            </label>
            <Input type="password" placeholder="Min. 8 characters" />
          </div>

          <Button variant="accent" className="w-full mt-2">
            Create account
          </Button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>or</span>
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        </div>

        <Button variant="outline" className="w-full gap-3">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </Button>

        <p className="text-center text-xs mt-6" style={{ color: "var(--color-text-muted)" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "var(--color-accent)" }} className="hover:underline">
            Sign in
          </Link>
        </p>

        <p className="text-center text-xs mt-3" style={{ color: "var(--color-text-muted)" }}>
          By signing up you agree to our{" "}
          <Link href="#" className="hover:underline" style={{ color: "var(--color-text-secondary)" }}>Terms</Link>
          {" & "}
          <Link href="#" className="hover:underline" style={{ color: "var(--color-text-secondary)" }}>Privacy</Link>.
        </p>
      </div>
    </div>
  );
}
