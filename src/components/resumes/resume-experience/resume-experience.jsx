import React from 'react'
import './resume-experience.scss'
import avatar from '../../../assets/images/resume-experience/avatar.png'
import address from '../../../assets/images/resume-experience/address.png'
import phone from '../../../assets/images/resume-experience/phone.png'
import email from '../../../assets/images/resume-experience/email.png'
import website from '../../../assets/images/resume-experience/website.png'

export function ResumeExperience({ data: { basicInformation, workExperience } }) {
	console.log(basicInformation)
	return (
		<div className='resume-experience'>
			<div className='left-column'>
				<div className='image'>
					<img src={avatar} alt='avatar' />
				</div>
				<div className='profile-name'>
					<p className='name'>{basicInformation.data.fullName}</p>
					<p className='title'>{basicInformation.data.jobTitle}</p>
				</div>
				<div className='about-me'>
					<div className='header'>About Me</div>
					<div className='content'>
						{/* I am passionate person when it comes to art. A positive creative individual with a smile. I am interested tighting up with this company. I am a grateful person in every little thing.  */}
						{basicInformation.data.about}
					</div>
				</div>
				<div className='contacts'>
					<div className='header'>Contacts</div>
					<div className='content'>
						<div>
							<img src={address} alt='address' />
							<span>{basicInformation.data.address}</span>
						</div>
						<div>
							<img src={phone} alt='phone' />
							<span>{basicInformation.data.phoneNumber}</span>
						</div>
						<div>
							<img src={email} alt='email' />
							<span>{basicInformation.data.email}</span>
						</div>
						<div>
							<img src={website} alt='website' />
							<span>{basicInformation.data.website}</span>
						</div>
					</div>
				</div>
				<div className='expertise'>
					<div className='header'>Expertise</div>
					<div className='content'>
						<div className='skill'>
							<div className='skill-name'>UI/UX</div>
							<div className='skill-percentage'>
								<div className='actual' />
							</div>
						</div>
						<div className='skill'>
							<div className='skill-name'>Photoshop</div>
							<div className='skill-percentage'>
								<div className='actual' />
							</div>
						</div>
						<div className='skill'>
							<div className='skill-name'>Illustrator</div>
							<div className='skill-percentage'>
								<div className='actual' />
							</div>
						</div>
						<div className='skill'>
							<div className='skill-name'>HTML</div>
							<div className='skill-percentage'>
								<div className='actual' />
							</div>
						</div>
						<div className='skill'>
							<div className='skill-name'>CSS</div>
							<div className='skill-percentage'>
								<div className='actual' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='right-column'>
				<div className='education'>
					<div className='header'>Education</div>
					<div className='content'>
						<div className='section'>
							<div className='section-header'>Master in Graphics 2005-2010</div>
							<div className='section-content'>
								<p>University of California Master Degree(2012-2016)</p>
								<p>UI/UX Design Winner, Coursework Multimedia</p>
							</div>
						</div>
						<div className='section'>
							<div className='section-header'>Bachelor in Graphics 2000-2005</div>
							<div className='section-content'>
								<p>University of California Master Degree(2012-2016)</p>
								<p>UI/UX Design Winner, Coursework Multimedia</p>
							</div>
						</div>
					</div>
				</div>
				<div className='experience'>
					<div className='header'>Experience</div>
					<div className='content'>
						{workExperience.data.map(n =>(
							<div className='section'>
								<div className='section-header'>{n.jobTitle}</div>
								<div className='section-content'>
									<p>{n.companyName} {n.startDate}-{n.endDate}</p>
									<p>{n.otherInfo}</p>
								</div>
							</div>
						))}


						{/* <div className='section'>
							<div className='section-header'>Senior Graphic Designer </div>
							<div className='section-content'>
								<p>Gullible Enterprises 2020-2024</p>
								<p>Creates graphics designs for the diffrent websites wordwide. Follow up with establish customers to offer additional products or services.</p>
							</div>
						</div>
						<div className='section'>
							<div className='section-header'>Graphic Designer</div>
							<div className='section-content'>
								<p>CRR Technologies 2016-2012</p>
								<p>Creates graphics designs for the diffrent websites wordwide. Follow up with establish customers to offer additional products or services. Assists employees with the latest graphic trends and apply it to the daily needs of the company. Research graphic trends and help the graphic team</p>
							</div>
						</div>
						<div className='section'>
							<div className='section-header'>Senior Graphic Designer </div>
							<div className='section-content'>
								<p>Gullible Enterprises 2020-2024</p>
								<p>Creates graphics designs for the diffrent websites wordwide. Follow up with establish customers to offer additional products or services.</p>
							</div>
						</div>
						<div className='section'>
							<div className='section-header'>Graphic Designer</div>
							<div className='section-content'>
								<p>CRR Technologies 2016-2012</p>
								<p>Creates graphics designs for the diffrent websites wordwide. Follow up with establish customers to offer additional products or services. Assists employees with the latest graphic trends and apply it to the daily needs of the company. Research graphic trends and help the graphic team</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}
