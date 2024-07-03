import SignupForm from "@/components/SignupForm";
import api from "@/oneentry";

async function SignupPage() {
  const signupForm = await api.Forms.getFormByMarker("signup");

  return <SignupForm formEntity={signupForm} />;
}

export default SignupPage;
