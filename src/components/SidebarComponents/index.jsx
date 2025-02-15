import React from "react";

// Library
import { NavLink, Link } from "react-router-dom";

// Helper
import { navContent } from "../../helper";

// Library
import { Popcorn } from "phosphor-react";
import { logout } from "../../authentication/firebase";

const SideBarComponents = ({ user }) => {
	return (
		<div className="fixed hidden h-full w-fit flex-col gap-8 rounded-xl  bg-slate-50 p-8 pt-12  text-slate-900 shadow-lg  sm:flex">
			<Link to={"/"} className="w-fit opacity-100 hover:rounded-full">
				<Popcorn size={42} color="#0ea5e9" className="" />
			</Link>
			<nav>
				<ul className="flex flex-col lg:gap-6">
					{navContent.map(content => (
						<li
							className="w-fit cursor-pointer rounded-full   "
							key={content.navName}
						>
							<NavLink
								to={content.navTo}
								end
								className={({ isActive }) =>
									[
										"flex items-stretch justify-between rounded-full py-3 px-2 hover:bg-cyan-500 hover:text-slate-50 lg:gap-6",
										isActive
											? "bg-cyan-500 text-slate-50"
											: "",
									]
										.filter(Boolean)
										.join(" ")
								}
							>
								{content.navIcon}
								<h3 className="hidden text-xl font-bold  lg:block">
									{content.navName}
								</h3>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			{user ? (
				<div
					className="mt-16 cursor-pointer justify-self-end rounded-full bg-red-500 py-4 px-2 text-center font-bold text-slate-50 hover:bg-slate-50 hover:text-slate-900 hover:ring-4 hover:ring-red-500"
					onClick={() => {
						logout();
						window.location.reload();
					}}
				>
					Logout
				</div>
			) : (
				<Link
					to="/signup"
					className="mt-16 cursor-pointer justify-self-end rounded-full bg-cyan-500 py-4 px-2 text-center font-bold text-slate-50 hover:bg-slate-50 hover:text-slate-900 hover:ring-4 hover:ring-cyan-500"
				>
					Sign in
				</Link>
			)}
		</div>
	);
};

export default SideBarComponents;
