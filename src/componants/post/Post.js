import React from 'react'
import './Post.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import img1 from '../img/jesse.jpeg'
import img2 from '../img/jesse1.jpeg'

const Post = () => {
  return (
    <div className="container">
    <div class="row justify-content-center  mt-1">
        <div class="col-md-5 col-sm-12 mt-1 postition-relative">
      <div class="card mb-2">
      <div className="card-body mb-1">

<img src={img1} className="rounded-circle post-img bg-secondary" width="60" height="60" alt='Pic' />
 <p className="post-text">
    <a className="edit-color post-link" href="#"><strong>Full_Name </strong></a>
    <span className='post-time mx-1'>• 20h</span>
 </p>
 
<h2 className='vertical-dots-icon'>...</h2>  </div>
  <div className="card upload-img">
  <img  src={img2} alt="post img" />
  </div>
  <div >
    <h3 className='likes-post'>❤︎</h3>
    <h3 className='superlikes-post'>🖤</h3>
    <h3 className='comments-post'>✉️</h3>
    <h3 className='share-post'>↗️</h3>
    <h3 className='save-post'>☑️</h3>
  </div>
  <div>
    <strong className='likes-numbers text-danger'>likes 10203</strong>
    <strong className='superlikes-numbers'>S-likes 503</strong>
  </div>
   
    

  </div>
</div>
</div>
</div>

  )
}

export default Post