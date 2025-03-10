import Head from "next/head";
import About from "src/components/About";
import Main from "src/components/Main";
import Contact from "src/components/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>MAFID | Front-End Developer</title>
				<meta
					name="description"
					content="I’m a front-end web developer specialized in usinf react, nextjs and typescript to build exceptional user interface."
				/>
				<link rel="icon" href="#" />
			</Head>
			<div className="overflow-x-clip">
				<Main />
				<About />
				<Contact />
			</div>
		</div>
	);
}
