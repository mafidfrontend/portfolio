import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { RotateLoader } from "react-spinners";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "#44A8B3",
};

const Loader = ({ loading }: { loading: boolean }) => {
	return (
		<div className="fixed inset-0 w-full lg:h-screen flex items-center justify-center z-40">
			<RotateLoader
				color={"#44A8B3"}
				className="scale-[150%]"
				loading={loading}
				cssOverride={override}
				size={18}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<div id="contact" className="w-full lg:h-screen">
				<div
					className="max-w-[1240px] m-auto px-2 py-16 w-full"
					data-aos="fade-left"
					data-aos-duration="1500"
				>
					<p className="text-xl tracking-widest uppercase text-primary">Contact</p>
					<h2 className="py-4">Get In Touch</h2>
					<div className="grid lg:grid-cols-5 gap-8">
						<div
							className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
							data-aos="flip-left"
							data-aos-duration="1000"
						>
							<div className="lg:p-4 h-full ">
								<div>
									<Image
										className="rounded-xl hover:scale-105 ease-in duration-300"
										src="/assets/contact.jpg"
										alt="/"
										layout="fill"
									/>
								</div>
								<div>
									<h2 className="py-2">MAFID</h2>
									<p className="text-xl mt-2">Front-End Developer</p>
									<p className="py-4 text-lg">
										I am available for freelance or full-time positions. Contact me and
										let&apos;s talk.
									</p>
								</div>
								<div>
									<div className="flex justify-between items-center mt-8">
										<p className="uppercase text-lg">Connect With Me</p>
										<AiOutlineArrowRight className="text-xl" />
									</div>
									<div className="flex items-center justify-between py-4">
										<a
											href="#"
											target="_blank"
											rel="noreferrer"
										>
											<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
												<FaLinkedinIn title="Linkedin" />
											</div>
										</a>
										<a
											href="#"
											target="_blank"
											rel="noreferrer"
										>
											<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
												<FaGithub title="GitHub" />
											</div>
										</a>

										<Link href="/resume">
											<a>
												<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
													<BsFillPersonLinesFill title="Resume" />
												</div>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div
							className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"
							data-aos="flip-right"
							data-aos-duration="1000"
						>
							<div className="p-4">
								<form onSubmit={(e) => handleSubmit(e)} noValidate>
									<div className="flex flex-col py-2">
										<label htmlFor="name" className="uppercase text-sm py-2">
											Name
										</label>
										<input
											id="name"
											className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-primary"
											type="text"
											name="name"
											autoComplete="on"
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="flex flex-col py-2">
										<label htmlFor="email" className="uppercase text-sm py-2">
											Email
										</label>
										<input
											id="email"
											className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-primary"
											type="email"
											name="email"
											autoComplete="on"
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className="flex flex-col py-2">
										<label htmlFor="subject" className="uppercase text-sm py-2">
											Subject
										</label>
										<input
											id="subject"
											className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-primary"
											type="text"
											name="subject"
											autoComplete="off"
											onChange={(e) => setSubject(e.target.value)}
										/>
									</div>
									<div className="flex flex-col py-2">
										<label htmlFor="message" className="uppercase text-sm py-2">
											Message
										</label>
										<textarea
											id="message"
											className="border-2 rounded-lg p-3 border-gray-300 resize-none focus:outline-primary"
											rows={10}
											name="message"
											autoComplete="off"
											onChange={(e) => setMessage(e.target.value)}
										></textarea>
									</div>
									<button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
								</form>
							</div>
						</div>
					</div>
					<div className="flex justify-center py-12">
						<Link href="/">
							<a>
								<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
									<HiOutlineChevronDoubleUp className="text-primary" size={30} />
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
