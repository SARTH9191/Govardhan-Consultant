import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Building2, 
  HardHat, 
  UserCheck, 
  Phone, 
  ArrowLeft, 
  Lock, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Smartphone,
  KeyRound,
  UserPlus,
  Mail,
  User,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { BRAND } from "@/data/content";
import { 
  getStoredUsers, 
  registerNewUser, 
  saveActiveSession, 
  UserRecord
} from "@/lib/authStorage";

export default function Login() {
  const [, setLocation] = useLocation();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [activeTab, setActiveTab] = useState<"client" | "engineer">("client");
  
  // Client login state
  const [clientIdentifier, setClientIdentifier] = useState("");
  const [clientOtp, setClientOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Engineer login state
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Registration state
  const [regName, setRegName] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regProjectName, setRegProjectName] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regRole, setRegRole] = useState<"client" | "engineer">("client");
  const [showRegPassword, setShowRegPassword] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const idClean = clientIdentifier.trim().toLowerCase();
    if (!idClean) {
      toast.error("Please enter your registered mobile number, email, or Project ID");
      return;
    }

    const users = getStoredUsers();
    const found = users.find(u => 
      u.phone.replace(/\D/g, "") === idClean.replace(/\D/g, "") ||
      u.email.toLowerCase() === idClean ||
      (u.projectId && u.projectId.toLowerCase() === idClean)
    );

    setOtpSent(true);
    setClientOtp(""); // Clean input for user to type their code
    if (found) {
      toast.success(`OTP sent to registered mobile for ${found.name}`, {
        description: "Please enter your verification code."
      });
    } else {
      toast.info(`OTP sent to ${clientIdentifier}`, {
        description: "Please enter the verification code to continue."
      });
    }
  };

  const handleClientLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientIdentifier.trim()) {
      toast.error("Please enter mobile, email or Project ID");
      return;
    }
    if (!clientOtp.trim()) {
      toast.error("Please enter the verification code");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const users = getStoredUsers();
      const idClean = clientIdentifier.trim().toLowerCase();
      let matched = users.find(u => 
        u.phone.replace(/\D/g, "") === idClean.replace(/\D/g, "") ||
        u.email.toLowerCase() === idClean ||
        (u.projectId && u.projectId.toLowerCase() === idClean)
      );

      if (!matched) {
        // Auto-create client user record so they have a persistent project view
        matched = {
          id: `usr_${Date.now()}`,
          name: clientIdentifier,
          phone: clientIdentifier,
          email: `${clientIdentifier.replace(/\W/g, "")}@client.com`,
          role: "client",
          projectId: `GC-PDP-${Math.floor(1000 + Math.random() * 9000)}`,
          projectName: `${clientIdentifier} Site Project`,
          createdAt: new Date().toISOString()
        };
      }

      saveActiveSession(matched);
      toast.success(`Welcome back, ${matched.name}!`, {
        description: `Project Code: ${matched.projectId} • Redirecting to Tracker...`
      });

      setTimeout(() => {
        setLocation("/#live-tracker");
      }, 1000);
    }, 600);
  };

  const handleEngineerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffId.trim() || !password.trim()) {
      toast.error("Please enter Staff ID / Email and Password");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const users = getStoredUsers();
      const idClean = staffId.trim().toLowerCase();
      const matched = users.find(u => 
        (u.projectId && u.projectId.toLowerCase() === idClean) ||
        u.email.toLowerCase() === idClean ||
        u.phone === idClean ||
        (idClean === "admin" && u.role === "admin")
      );

      if (!matched) {
        toast.error("Invalid Staff ID or Password", {
          description: "Please check your credentials or register a new account."
        });
        return;
      }

      if (matched.passwordHash && matched.passwordHash !== password.trim()) {
        toast.error("Incorrect password", {
          description: "Please check your password and try again."
        });
        return;
      }

      saveActiveSession(matched);
      toast.success(`Engineer Authenticated: ${matched.name}`, {
        description: `Role: ${matched.role.toUpperCase()} • ID: ${matched.projectId}`
      });

      setTimeout(() => {
        if (matched.role === "admin") {
          setLocation("/#admin-console");
        } else {
          setLocation("/#quality");
        }
      }, 1000);
    }, 600);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim()) {
      toast.error("Please enter full name");
      return;
    }
    if (!regPhone.trim()) {
      toast.error("Please enter valid mobile number");
      return;
    }
    if (!regEmail.trim()) {
      toast.error("Please enter email address");
      return;
    }
    if (regRole === "engineer" && !regPassword.trim()) {
      toast.error("Please set a password for the engineer account");
      return;
    }
    if (regPassword && regPassword !== regConfirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const res = registerNewUser({
        name: regName,
        phone: regPhone,
        email: regEmail,
        role: regRole,
        password: regPassword || undefined,
        projectName: regProjectName || undefined
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success("Registration Successful!", {
        description: `${res.message}. You are now logged in!`
      });

      // Clear register inputs
      setRegName("");
      setRegPhone("");
      setRegEmail("");
      setRegProjectName("");
      setRegPassword("");
      setRegConfirmPassword("");

      // Switch to login tab or redirect
      setTimeout(() => {
        setLocation(res.user?.role === "engineer" ? "/#quality" : "/#live-tracker");
      }, 1200);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col justify-between selection:bg-[#F4B400] selection:text-[#111111] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none filter blur-sm scale-105"
        style={{ backgroundImage: `url('/images/plinth-columns-phase.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/95 via-[#070709]/90 to-[#070709] pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 w-full px-6 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#F4B400] transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-3">
          <img 
            src="/images/logo.jpg" 
            alt="Govardhan Consultant" 
            className="h-9 w-9 rounded-full object-cover border-2 border-[#F4B400] shadow-md shadow-[#F4B400]/20" 
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-sm font-black tracking-tight text-white leading-tight">
              {BRAND.name}
            </span>
            <span className="text-[9px] text-[#F4B400] font-bold tracking-widest uppercase">
              Engineers & Contractors
            </span>
          </div>
        </div>
        <a 
          href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
          className="text-xs font-bold text-white/80 hover:text-[#F4B400] flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
        >
          <Phone className="h-3 w-3 text-[#F4B400]" />
          <span className="hidden md:inline">{BRAND.phone}</span>
        </a>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-lg">
          
          {/* Brand Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-[#F4B400]/10 border border-[#F4B400]/30 mb-3">
              <img 
                src="/images/logo.jpg" 
                alt="Govardhan Consultant" 
                className="h-14 w-14 rounded-full object-cover border-2 border-[#F4B400] shadow-xl shadow-[#F4B400]/30" 
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Enterprise Access Portal
            </h1>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Pandharpur Turnkey Project Tracking, Site Telemetry & Client Management
            </p>
          </div>

          {/* Mode Switcher: Login vs New Registration */}
          <div className="flex items-center justify-center gap-2 mb-4 bg-white/5 p-1 rounded-xl border border-white/10 max-w-xs mx-auto">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                mode === "login" 
                  ? "bg-[#F4B400] text-[#111] shadow-md shadow-[#F4B400]/25" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${
                mode === "register" 
                  ? "bg-[#F4B400] text-[#111] shadow-md shadow-[#F4B400]/25" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>Register</span>
            </button>
          </div>

          {/* Card Container */}
          <div className="bg-[#111114]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
            
            {mode === "login" ? (
              <>
                {/* Role Switcher: Client vs Site Engineer */}
                <div className="grid grid-cols-2 gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10 mb-6">
                  <button
                    type="button"
                    onClick={() => setActiveTab("client")}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-extrabold transition-all ${
                      activeTab === "client"
                        ? "bg-[#F4B400] text-[#111111] shadow-lg shadow-[#F4B400]/25"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>Client Portal</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("engineer")}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-extrabold transition-all ${
                      activeTab === "engineer"
                        ? "bg-[#F4B400] text-[#111111] shadow-lg shadow-[#F4B400]/25"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <HardHat className="h-3.5 w-3.5" />
                    <span>Site Engineer / Staff</span>
                  </button>
                </div>

                {/* Client Login Form */}
                {activeTab === "client" ? (
                  <form onSubmit={otpSent ? handleClientLogin : handleSendOtp} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                        Mobile Number / Email / Project ID
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                        <Input
                          type="text"
                          placeholder="e.g. 9822XXXXXX or GC-PDP-XXXX"
                          value={clientIdentifier}
                          onChange={(e) => setClientIdentifier(e.target.value)}
                          className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 h-11 rounded-xl text-sm focus:border-[#F4B400]"
                        />
                      </div>
                      <span className="text-[11px] text-white/40 mt-1 block">
                        Use your registered phone, email, or project reference code.
                      </span>
                    </div>

                    {otpSent && (
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                            Enter Verification OTP
                          </label>
                          <button
                            type="button"
                            onClick={handleSendOtp}
                            className="text-[11px] text-[#F4B400] hover:underline"
                          >
                            Resend OTP
                          </button>
                        </div>
                        <div className="relative">
                          <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                          <Input
                            type="text"
                            maxLength={6}
                            placeholder="Enter 4-digit code"
                            value={clientOtp}
                            onChange={(e) => setClientOtp(e.target.value)}
                            className="bg-black/50 border-white/15 text-white tracking-widest font-mono text-center pl-10 h-11 rounded-xl text-lg font-bold focus:border-[#F4B400]"
                          />
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-black h-11 rounded-xl text-sm shadow-xl shadow-[#F4B400]/25 transition-all mt-2"
                    >
                      {isSubmitting 
                        ? "Connecting to Site Data..." 
                        : otpSent 
                          ? "Verify & Open Live Tracker" 
                          : "Send Security OTP"
                      }
                    </Button>
                  </form>
                ) : (
                  /* Engineer Login Form */
                  <form onSubmit={handleEngineerLogin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1.5">
                        Staff ID / Email / Username
                      </label>
                      <div className="relative">
                        <HardHat className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                        <Input
                          type="text"
                          placeholder="Enter your Staff ID or Email"
                          value={staffId}
                          onChange={(e) => setStaffId(e.target.value)}
                          className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 h-11 rounded-xl text-sm focus:border-[#F4B400]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-bold text-white/80 uppercase tracking-wider">
                          Password
                        </label>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 pr-10 h-11 rounded-xl text-sm focus:border-[#F4B400]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-black h-11 rounded-xl text-sm shadow-xl shadow-[#F4B400]/25 transition-all mt-2"
                    >
                      {isSubmitting ? "Verifying Staff Credentials..." : "Site Engineer Login"}
                    </Button>
                  </form>
                )}
              </>
            ) : (
              /* New User Registration Form */
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="bg-[#F4B400]/10 border border-[#F4B400]/30 rounded-xl p-3 text-xs text-white/90">
                  <span className="font-bold text-[#F4B400] block mb-0.5">Register for Pandharpur Project Access</span>
                  Create your client or engineer account to track ongoing constructions, receive daily inspection logs and download bills.
                </div>

                {/* Role select */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRegRole("client")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      regRole === "client"
                        ? "bg-[#F4B400] text-[#111] border-[#F4B400]"
                        : "bg-black/40 text-white/70 border-white/15 hover:border-white/30"
                    }`}
                  >
                    Client (Home Owner)
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegRole("engineer")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      regRole === "engineer"
                        ? "bg-[#F4B400] text-[#111] border-[#F4B400]"
                        : "bg-black/40 text-white/70 border-white/15 hover:border-white/30"
                    }`}
                  >
                    Site Engineer / Contractor
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                    <Input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 h-10 rounded-xl text-sm focus:border-[#F4B400]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                      <Input
                        type="tel"
                        required
                        placeholder="e.g. 9822123456"
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 h-10 rounded-xl text-sm focus:border-[#F4B400]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                      <Input
                        type="email"
                        required
                        placeholder="e.g. ramesh@gmail.com"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 h-10 rounded-xl text-sm focus:border-[#F4B400]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                    Project / Site Description (Optional)
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                    <Input
                      type="text"
                      placeholder="e.g. 3BHK Bungalow, Isbavi Pandharpur"
                      value={regProjectName}
                      onChange={(e) => setRegProjectName(e.target.value)}
                      className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 h-10 rounded-xl text-sm focus:border-[#F4B400]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                      {regRole === "engineer" ? "Password *" : "Password (Optional)"}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                      <Input
                        type={showRegPassword ? "text" : "password"}
                        required={regRole === "engineer"}
                        placeholder="Create password"
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 pr-10 h-10 rounded-xl text-sm focus:border-[#F4B400]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegPassword(!showRegPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                      >
                        {showRegPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F4B400]" />
                      <Input
                        type={showRegPassword ? "text" : "password"}
                        placeholder="Repeat password"
                        value={regConfirmPassword}
                        onChange={(e) => setRegConfirmPassword(e.target.value)}
                        className="bg-black/50 border-white/15 text-white placeholder:text-white/30 pl-10 h-10 rounded-xl text-sm focus:border-[#F4B400]"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F4B400] text-[#111111] hover:bg-[#F4B400]/90 font-black h-11 rounded-xl text-sm shadow-xl shadow-[#F4B400]/25 transition-all mt-3"
                >
                  {isSubmitting ? "Generating Credentials..." : "Create Account & Get Project ID"}
                </Button>
              </form>
            )}

            {/* Security Assurance Badge */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-white/50">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>256-bit Encrypted Site Records & Data Isolation</span>
            </div>
          </div>

          {/* Quick Help Footer */}
          <div className="mt-6 text-center text-xs text-white/50">
            Need access assistance or new turnkey consultation?{" "}
            <a 
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
              className="text-[#F4B400] font-bold hover:underline"
            >
              Call {BRAND.phone}
            </a>
          </div>

        </div>
      </main>

      {/* Footer copyright */}
      <footer className="relative z-10 w-full py-4 text-center text-xs text-white/40 border-t border-white/5">
        &copy; 2026 {BRAND.name}. All rights reserved. Govardhan Traders & Engineers • Pandharpur, Maharashtra.
      </footer>
    </div>
  );
}
