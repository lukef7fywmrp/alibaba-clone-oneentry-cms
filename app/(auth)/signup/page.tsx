import SignupForm from "@/components/SignupForm";
import { getApiInstance } from "@/oneentry";

async function SignupPage() {
  const apiInstance = await getApiInstance();
  const signupForm = await apiInstance?.Forms.getFormByMarker("signup");

  return <SignupForm formEntity={signupForm} />;
}

export default SignupPage;
