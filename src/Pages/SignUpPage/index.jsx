import React, { useEffect, useState } from "react";

// Library
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
	auth,
	registerWithEmailAndPassword,
	signInWithGoogle,
} from "../../authentication/firebase";

// Components
import ErrorComponents from "../../components/ErrorComponents";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);

	const navigate = useNavigate();

	const register = () => {
		registerWithEmailAndPassword(email, password);
		navigate("/");
	};

	const signUpWithGoogle = () => {
		signInWithGoogle();
	};
	useEffect(() => {
		if (loading) return;
	}, [user, loading]);

	if (error) return <ErrorComponents />;
	return (
		<section className="bg-slate-50 ">
			<div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
				<div className="w-full rounded-lg bg-white shadow   sm:max-w-md md:mt-0 xl:p-0">
					<div className="space-y-4 p-6 sm:p-8 md:space-y-6">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-slate-900  md:text-2xl">
							Sign up
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={e => {
								e.preventDefault();
								register();
							}}
						>
							<div>
								<label
									htmlFor="email"
									className="mb-2 block text-sm font-medium text-slate-900 "
								>
									New Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-slate-900  sm:text-sm"
									placeholder="Your email"
									required
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="mb-2 block text-sm font-medium text-slate-900 "
								>
									New Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300  p-2.5 text-slate-900  sm:text-sm"
									required
									onChange={e => setPassword(e.target.value)}
								/>
							</div>

							<button
								type="submit"
								className="w-full rounded-lg bg-cyan-500  px-5 py-2.5 text-center text-sm font-medium text-slate-50 hover:bg-slate-50 hover:text-slate-900 hover:ring-4 hover:ring-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500"
								onClick={register}
							>
								Sign Up
							</button>

							<button
								type="button"
								className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex w-full items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
								onClick={signUpWithGoogle}
							>
								<svg
									className="mr-2 -ml-1 h-4 w-4"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="google"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 488 512"
								>
									<path
										fill="currentColor"
										d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
									></path>
								</svg>
								Sign in with Google
							</button>
							<p class="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account?
								<Link
									to="/login"
									className="ml-2  font-bold text-cyan-500 hover:underline"
								>
									Login here
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
