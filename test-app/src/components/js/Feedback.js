
import React from 'react'
import '../css/Feedback.css'

export default function Feedback({staticData}) {

    const {comments} = staticData
  return (
    <section className='feedbacks'>

        <h1 className='feedbacks-title'> Feedback from customers</h1>
        <div className='Feedbacks-container'>

            {comments && comments.length !== 0 ? comments.map((comment)=>
            <div className='feedback card'>
                <img src={comment.image} className='userpicture'></img>
                <h3 className='username'>{comment.name}</h3>
                <div className='rating'>
                    <i className="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p className='usertext'>
                    {comment.comment}
                </p>
            </div>) : ''}
        </div>

    </section>
  )
}
