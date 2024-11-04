import Link from 'next/link'

export default function index(){

	return (
	
		<>
			<section id='home'>
				<header>
					<nav>
						<ul>
							<li><Link href="/">Home</Link></li>
						</ul>
					</nav>
				</header>
				<main>
					<h1>Discordjs Helper Pack</h1>
					<div>
						<ul>
							<li><Link href='/getting-started/what-is-package'>Getting Started</Link></li>
						</ul>
					</div>
				</main>
			</section>
		</>
	)
}