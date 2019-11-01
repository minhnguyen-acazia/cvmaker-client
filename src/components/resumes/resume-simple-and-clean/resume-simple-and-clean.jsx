import React from 'react'
import './resume-simple-and-clean.scss'
import avatar from '../../../assets/images/resume-simple-and-clean/avatar.png'

export function ResumeSimpleAndClean() {
  return (
    <div className='resume-simple-and-clean'>
      <div className='top-rectangle-container'>
        <div className='top-rectangle'/>
      </div>
      <div className='profile-name'>
        <div className='name'>Robert Smith</div>
        <div className='title'>UI &amp; UI Expert</div>
      </div>
      <div className='main-content'>
        <div className='left-column'>
          <div className='row-1'>
					  <img src={avatar} alt='avatar' />
          </div>
          <div className='row-2'>
            <div className='about'>
              <div className='header'>ABOUT ME</div>
              <div className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
            <div className='separator'/>
            <div className='contact'>
              <div className='header'>CONTACT ME</div>
              <div className='content'>
                <div className='item'>
                  <div className='item-label'>Phone</div>
                  <div className='item-content'>+1800 40 123 456</div>
                </div>
                <div className='item'>
                  <div className='item-label'>Address</div>
                  <div className='item-content'>Street address number 23</div>
                </div>
                <div className='item'>
                  <div className='item-label'>Email</div>
                  <div className='item-content'>info@psdfreebies.com</div>
                </div>
                <div className='item'>
                  <div className='item-label'>Website</div>
                  <div className='item-content'>www.psdfreebies.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-column'>
          <div className='work-experience'>
            <div className='header'>WORK EXPERIENCE</div>
            <div className='item'>
              <div className='col-1'>2014 - 2016</div>
              <div className='col-2'>
                <div className='place'>COMPANY IN LOS ANGELES</div>
                <div className='title'>Art Director</div>
                <div className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
              </div>
            </div>
            <div className='item'>
              <div className='col-1'>2012 - 2014</div>
              <div className='col-2'>
                <div className='place'>COMPANY IN NEW YORK</div>
                <div className='title'>Junior Art Director</div>
                <div className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
              </div>
            </div>
            <div className='item'>
              <div className='col-1'>2011 - 2012</div>
              <div className='col-2'>
                <div className='place'>MY FIRST COMPANY NAME</div>
                <div className='title'>Trainee</div>
                <div className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
              </div>
            </div>
          </div>
          <div className='separator' />
          <div className='education'>
            <div className='header'>EDUCATION</div>
            <div className='item'>
              <div className='col-1'>2008 - 2011</div>
              <div className='col-2'>
                <div className='place'>MIT University of United States</div>
                <div className='major'>Computer science</div>
              </div>
            </div>
            <div className='item'>
              <div className='col-1'>2005 - 2007</div>
              <div className='col-2'>
                <div className='place'>Head-Royce School</div>
                <div className='major'>Oakland, CA</div>
              </div>
            </div>
            <div className='item'>
              <div className='col-1'>2001 - 2004</div>
              <div className='col-2'>
                <div className='place'>Albert Walsh Elementary School</div>
                <div className='major'>Degree Title</div>
              </div>
            </div>
          </div>
          <div className='separator' />
          <div className='skills'>
            <div className='professional-skills'>
              <div className='header'>PROFESSIONAL SKILLS</div>
              <div className='skill-set'>
                <div className='label-col'>
                  <span>Photoshop</span>
                  <span>Cinema 4D</span>
                  <span>HTML5</span>
                  <span>Javascript</span>
                  <span>Animation</span>
                </div>
                <div className='skill-col'>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                </div>
              </div>
            </div>
            <div className='personal-skills'>
              <div className='header'>PERSONAL SKILLS</div>
              <div className='skill-set'>
                <div className='label-col'>
                  <span>Communication</span>
                  <span>Teamwork</span>
                  <span>Creativity</span>
                  <span>Leadership</span>
                  <span>Management</span>
                </div>
                <div className='skill-col'>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                  <div className='skill'>
                    <div className='actual' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
