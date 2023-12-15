import React from 'react'

const Contact = () => {
  return (
    <section className="container-service">
    <h1>Ikuti Terus</h1>
    <h1>Update Terus dari kami</h1>
    <div className="form-group">
      <div className="input-container">
        <label htmlFor="nama">
          Nama Lengkap
          <span className="required">*</span>
        </label>
        <input type="text" placeholder="Nama Lengkap Kamu" />
      </div>
      <div className="input-container">
        <label htmlFor="nama">
          Nama Perusahaan
          <span className="required">*</span>
        </label>
        <input type="text" placeholder="Input Nama Perusahaan" />
      </div>
      <div className="input-container">
        <label htmlFor="nama">
          Email
          <span className="required">*</span>
        </label>
        <input type="text" placeholder="Email@karpu.com" />
      </div>
    </div>
    <button className="btn-contact">Kirim</button>
  </section>
  
  )
}

export default Contact
