import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer=()=>{
    return(
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgb(251, 241, 227)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='https://mdbootstrap.com/'>
            Freegames/younes
          </a>
        </div>
      </MDBFooter>
    )
}

export default Footer 