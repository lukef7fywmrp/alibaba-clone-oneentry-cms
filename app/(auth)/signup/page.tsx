import SignupForm from "@/components/SignupForm";
import getAPI from "@/oneentry";

async function SignupPage() {
  const signupForm = await getAPI().Forms.getFormByMarker("signup", "en_US");

  return <SignupForm formEntity={signupForm} />;
}

export default SignupPage;
