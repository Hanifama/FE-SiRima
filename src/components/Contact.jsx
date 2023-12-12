import React from 'react'

const Contact = () => {
  return (
    <section className="container-service" >
    <h1>Ikuti Terus</h1>
    <h1>Update Terus dari kami</h1>
    <div class="form-group">
    <div class="input-container">
        <label htmlFor="nama">
        Nama Lengkap
        <span class="required">*</span>
        </label>
        <input type="text" placeholder='Nama Lengkap Kamu' />
    </div>
    <div class="input-container">
        <label htmlFor="nama">
        Nama Perusahaan
        <span class="required">*</span>
        </label>
        <input type="text" placeholder='Input Nama Perusahaan' />
    </div>
    <div class="input-container">
        <label htmlFor="nama">
        Email
        <span class="required">*</span>
        </label>
        <input type="text" placeholder='Email@karpu.com' />
    </div>
    </div>
    <button className='btn-contact'>Kirim</button>
    </section>
  )
}

export default Contact
