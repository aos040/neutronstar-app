import React from 'react'
import '../css/Footer.css'
import '../css/Utilities.css'

export default function Footer({staticData}) {

    const {socialmedia} = staticData
    const {paymentsupported} = staticData
    const {downloadstore} = staticData

  return (
    <footer className='footer-section bg-dark'>

        <div className='container bg-dark'>

            <div className='footer-grid bg-dark push-left'>

                {/* Item 1 */}
                <div className='footer bg-dark'>
                    <h3 className='bg-dark'>Download Our App</h3>
                    <p className='bg-dark'>Download App for Android and ios mobile phone.</p>
                    <div className='store-logo'>
                        {downloadstore && downloadstore.length !== 0 ? downloadstore.map((store)=><img className='play-store' src={store.image}></img>) : ''}
                    </div>
                </div>

                {/* Item 2 */}
                <div className='footer bg-dark'>
                    <h3 className='bg-dark'>Customer Service</h3>
                    <div className='bg-dark list'>
                        <p><a href='#'>Contact us</a></p>
                        <p><a href='#'>Contact us</a></p>
                        <p><a href='#'>Return product</a></p>
                        <p><a href='#'>Track package</a></p>
                        <p><a href='#'>Most asked questions</a></p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className='footer bg-dark'>
                    <h3 className='bg-dark'>About us</h3>
                    <div className='bg-dark list'>
                        <p><a href='#'>About us</a></p>
                        <p><a href='#'>Find shops</a></p>
                        <p><a href='#'>Apply jobs</a></p>
                    </div>
                </div>
            
            </div>

            <div className='media-payments'>

                <div className='box-1'>
                    <h3>Find Us On Social Media.</h3>
                    <div className='social-media'>
                        {socialmedia && socialmedia.length !== 0 ? socialmedia.map((platform)=>
                            <a target='_blank' href={platform.name ==='Linkedln' ? 'https://www.linkedin.com/in/abdimalik-osman/' : '#'}> <img style={{width:'30px'}} src={platform.image}/> </a>
                        ) : ''}
                    </div>
                </div>

                <div className='box-2'>
                    <h3>Supported Payments</h3>
                    <div className='payments-supported'>

                        {paymentsupported && paymentsupported.length !== 0 ? paymentsupported.map((payment)=>
                            <img className={payment.name !== 'Vipps' ? 'cardsize' : ''} src={payment.image}></img>
                        ) : ''}
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}
