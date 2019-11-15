import React from 'react'
import './resume-elegant-modern.scss'
import avatar from '../../../assets/images/resume-elegant-modern/avatar.png'

export function ResumeElegantModern() {
  return (
    <div className='resume-elegant-modern'>
      <div className='section-1'>
        <div className='col-1'>
					<div className='avatar'>
            <img src={avatar} alt='avatar' />
          </div>
          <div className='profile'>
            <div className='name'>
              <span className='first-name'>Paul</span>
              <br />
              <span className='last-name'>Waulson</span>
            </div>
            <div className='title'>Web &amp; Graphic Designer</div>
          </div>
        </div>
        <div className='separator' />
        <div className='col-2'>
          <div className='contact'>
            <div className='contact-item'>
              <span className='label'>Phone:</span>
              <span className='value'>+00 1234 567 89</span>
            </div>
            <div className='contact-item'>
              <span className='label'>Area:</span>
              <span className='value'>123, street, New York, USA</span>
            </div>
            <div className='contact-item'>
              <span className='label'>Email:</span>
              <span className='value'>Free@PSDFreebies.com</span>
            </div>
          </div>
          <div className='separator' />
          <div className='about'>
            <div className='title'>ABOUT ME</div>
            <div className='description'>Porttitor amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem ipsum sollicitudin est prttitor.</div>
          </div>
        </div>
      </div>

      <div className='section-2'>
        <div className='experiences'>
          <div className='header'>
            <div className='header-title'>EXPERIENCE</div>
            <div className='header-line'/>
          </div>
          <div className='experience'>
            <div className='col-1'>
              <div className='title'>
                <span>SENIOR</span>
                <span>WEB DEVELOPER</span>
              </div>
              <div className='time'>Jan 2017 - Dec 2015</div>
            </div>
            <div className='col-2'>
              <div className='place'>Works in Lorem Ipsum - United States</div>
              <div className='description'>Porttitor amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem ipsum sollicitudin est prttitor.</div>
            </div>
          </div>
          <div className='experience'>
            <div className='col-1'>
              <div className='title'>
                <span>SENIOR</span>
                <span>WEB DEVELOPER</span>
              </div>
              <div className='time'>Mar 2011 - Feb 2015</div>
            </div>
            <div className='col-2'>
              <div className='place'>Works in Lorem Ipsum - New York</div>
              <div className='description'>Porttitor amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem ipsum sollicitudin est prttitor.</div>
            </div>
          </div>
          <div className='experience'>
            <div className='col-1'>
            <div className='title'>
                <span>SENIOR</span>
                <span>WEB DEVELOPER</span>
              </div>
              <div className='time'>Mar 2009 - Feb 2011</div>
            </div>
            <div className='col-2'>
              <div className='place'>Works in Lorem Ipsum - New York</div>
              <div className='description'>Porttitor amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem ipsum sollicitudin est prttitor. ipsum dolor molaternpretium iscon fringilla delislibero lorem ipsum sollicitudin est prttitor.</div>
            </div>
          </div>
        </div>
        <div className='skills'>
          <div className='pro-skills'>
            <div className='header'>
              <div className='header-title'>PRO SKILLS</div>
              <div className='header-line'/>
            </div>
            <div className='skill'>
              <div className='skill-name'>Photoshop</div>
              <div className='skill-percentage'>
                <div className='actual' style={{width: '50%'}} />
              </div>
            </div>
            <div className='skill'>
              <div className='skill-name'>Illustator</div>
              <div className='skill-percentage'>
              <div className='actual' style={{width: '50%'}} />
              </div>
            </div>
            <div className='skill'>
              <div className='skill-name'>Javascript</div>
              <div className='skill-percentage'>
              <div className='actual' style={{width: '50%'}} />
              </div>
            </div>
            <div className='skill'>
              <div className='skill-name'>HTML / CSS</div>
              <div className='skill-percentage'>
              <div className='actual' style={{width: '50%'}} />
              </div>
            </div>
          </div>
          <div className='per-skills'>
            <div className='header'>
              <div className='header-title'>PER SKILLS</div>
              <div className='header-line'/>
            </div>
            <div className='skill'>
              <div className='skill-name'>Creativity</div>
              <div className='skill-percentage'>
              <div className='actual' style={{width: '50%'}} />
              </div>
            </div>
            <div className='skill'>
              <div className='skill-name'>Teamwork</div>
              <div className='skill-percentage'>
              <div className='actual' style={{width: '50%'}} />
              </div>
            </div>
            <div className='skill'>
              <div className='skill-name'>Hardwork</div>
              <div className='skill-percentage'>
              <div className='actual' style={{width: '50%'}} />
              </div>
            </div>
            <div className='skill'>
              <div className='skill-name'>Leadership</div>
              <div className='skill-percentage'>
              <div className='actual' style={{width: '50%'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <div className='header'>
          <div className='header-title'>EDUCATION</div>
          <div className='header-line'/>
        </div>
        <div className='course'>
          <div className='col-1'>
            <div className='title'>
              <span>SENIOR</span>
              <span>WEB DESIGNER</span>
            </div>
            <div className='time'>Jan 2013 - Dec 2015</div>
          </div>
          <div className='col-2'>
            <div className='place'>Boston High School - California</div>
            <div className='description'>Amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon frignilla delislibero lorem ipsum sillicitudin est porttitor. tempus id friniggia</div>
          </div>
        </div>
        <div className='course'>
          <div className='col-1'>
            <div className='title'>
              <span>SENIOR</span>
              <span>WEB DESIGNER</span>
            </div>
            <div className='time'>Mar 2011 - Feb 2012</div>
          </div>
          <div className='col-2'>
            <div className='place'>Boston High School - California</div>
            <div className='description'>Amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon frignilla delislibero lorem ipsum sillicitudin est porttitor. tempus id friniggia</div>
          </div>
        </div>
      </div>

      <div className='section-4'>

      </div>
    </div>
  )
}
