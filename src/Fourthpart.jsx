import React from 'react'
import Button from './Button'
import './App.css'

const Fourthpart = () => {
  return (
    <div className='fourth-part'>
        <div className='hero-content4'>
            <h2>Autumn helps manage everything after a death</h2>

            <div className='grouping'>

                <img src="Homepage.webp" className="groupImg equal-height" />
                <div className='group1'>
                    <h2>Follow step-by-step guides</h2>
                    <div className='sub-group'>
                        <img src='photo-camera.png'/>
                        <p>Get started after a death</p>
                    </div>
                    
                    <div className='sub-group'>
                        <img src="bird.png" alt="" />
                        <p>Organize funerals and memorials</p>
                    </div>

                    <div className='sub-group'>
                        <img src="building.png" alt="" />
                        <p>Settle estates and inheritance</p>
                    </div>

                    <div className='sub-group'>
                        <img src="handshake.png" alt="" />
                        <p>Get support for prolonged grief</p>
                    </div>

                    <div className='sub-group'>
                        <img src="privacy-policy.png" alt="" />
                        <p>Create estate plans, wills and trusts</p>
                    </div>

                    <Button value="Follow the free guides" to = "/guides"/>

        
                </div>

            </div>
            
            <div className='grouping'>

                 <div className='group1'>
                    <h2>Create memorial websites</h2>
                    <div className='sub-group'>
                        <img src='calendar.png'/>
                        <p>Share funeral dates and locations</p>
                    </div>
                    
                    <div className='sub-group'>
                        <img src="check.png" alt="" />
                        <p>Manage RSVPs and gifts</p>
                    </div>

                    <div className='sub-group'>
                        <img src="image-gallery.png" alt="" />
                        <p>Share and collect memories</p>
                    </div>

                    <div className='sub-group'>
                        <img src="piggy-bank.png" alt="" />
                        <p>Request support and donations</p>
                    </div>

                    <div className='sub-group'>
                        <img src="privacy-policy.png" alt="" />
                        <p>Control website privacy</p>
                    </div>

                    <Button value="Create a free memorial" to="memorials"/>

                  
                </div>
                <img src="Homepage2.webp" className="groupImg equal-height" />

                
                
            </div>


          <div className='grouping'>
            <img src="Homepage3.webp" className="groupImg equal-height" />

            <div className='group1'>
                    <h2>Find local providers</h2>
                    <div className='sub-group'>
                        <img src='self-love.png'/>
                        <div>
                        <p><b>Grief support</b></p>
                        <p>Grief counselors, therapists, social workers</p>
                        </div>
                    </div>
                    
                    <div className='sub-group'>
                        <img src="handshake.png" alt="" />
                        <div>
                        <p><b>Estate attorneys</b></p>
                        <p>Settle an estate, manage probate, draft a will</p>
                        </div>
                    </div>

                    <div className='sub-group'>
                        <img src="bird.png" alt="" />
                        <div>
                        <p><b>Funeral homes</b></p>
                        <p>Burial, cremation, eco-friendly options</p>
                        </div>
                    </div>

                    <div className='sub-group'>
                        <img src="check.png" alt="" />
                        <div>
                        <p><b>Logistics managers</b></p>
                        <p>Sorting, selling, moving</p>
                        </div>
                    </div>

                    <div className='sub-group'>
                        <img src="building.png" alt="" />
                        <div>
                        <p><b>Estate resellers</b></p>
                        <p>Appraisals, property authentication</p>
                        </div>
                    </div>

                    <Button value="Find a provider" to= "/providers"/>

        
                </div>


                
               
                
            </div>

        </div>

    </div>
  )
}

export default Fourthpart