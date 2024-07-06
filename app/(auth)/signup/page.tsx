import DynamicSignupForm from "@/components/DynamicSignupForm";
import { getApiInstance } from "@/oneentry";

async function SignupPage() {
  const apiInstance = await getApiInstance();
  const signupForm = await apiInstance?.Forms.getFormByMarker("signup");

  return <DynamicSignupForm formEntity={signupForm} />;
}

export default SignupPage;
