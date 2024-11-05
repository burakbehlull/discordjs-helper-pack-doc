import Link from 'next/link'
import '../app/globals.css'
export default function index(){

	return (
	
		<>
			<section id='home'>
				<header>
					
					<nav>
						<ul>
							<li className="btn1"><Link href="/">Home</Link></li>
							<li className="btn1"><Link href="https://www.npmjs.com/package/discordjs-helper-pack">Package Visit</Link></li>
						</ul>
					</nav>
				</header>
				<main>
				<h1 id="title">Discordjs Helper Pack</h1>
					<div>
						
						<ul>
							
							<li className="btn2"><Link href='/getting-started/quick-start'>Getting Started</Link></li>
							
						
						</ul>
					</div>
				</main>
			</section>
		</>
	)
}