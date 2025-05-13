import { useState } from 'react'

function LandingPage() {

  return (
    <div>
      <div>
        {/* Left container - Site info*/}
        <h1>Site Title Text</h1>
        <h2>Subheader For Website Placeholder Text</h2>
        <p>Information Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni doloremque enim voluptas deserunt nemo debitis, nam quaerat. Sequi nostrum facere sit maxime aliquid delectus, earum magnam distinctio natus amet.</p>
        <div>
          {/*3D Model*/}
        </div>
      </div>
      <div>
        {/* Right container - Options menu*/}
        <div>
          <ul>
            <li><a>Ingredients and Food Products</a></li>
            <li><a>Option 2</a></li>
            <li><a>Option 3</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
