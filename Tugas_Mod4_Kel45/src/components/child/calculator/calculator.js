import { useState, useEffect , Fragment } from "react";

export default function Calculator() {
  const [daftar_makanan, setDaftarMakanan] = useState({
    makanan: [
      ['Sate Kambing', 15000],
      ['Nasi Goreng Bakso', 12000],
      ['Gado-gado', 15000],
      ['Kerupuk', 8000],
      ['Dendeng Sapi Goreng', 18000],
      ['Empal Daging Sapi', 20000],

    ]
  });
  const [menu, setMenu] = useState({
      pesanan1: 0,
      pesanan2: 0,
      pesanan3: 0,
  });
  const [totalpesanan, setTotal] = useState(0);
  const [jumlah, setJumlah] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
  })
  
  const handleCalculation = (a, b) => {
    const {
      pesanan1,
      pesanan2,
      pesanan3,
    } = a;

    const {
      count1,
      count2,
      count3,
    } = b
    
    var total = pesanan1 * count1 + pesanan2 * count2 + pesanan3 * count3;
    setTotal(total) 
  }

  const countUp_1 = () => {
    setJumlah({...jumlah, count1: jumlah.count1 + 1})
    handleCalculation(menu, jumlah)
  };
  const countDown_1 = () => {
    setJumlah({...jumlah, count1: jumlah.count1 - 1})
    handleCalculation(menu, jumlah)
  };
  const countUp_2 = () => {
    setJumlah({...jumlah, count2: jumlah.count2 + 1})
    handleCalculation(menu, jumlah)
  };
  const countDown_2 = () => {
    setJumlah({...jumlah, count2: jumlah.count2 - 1})
    handleCalculation(menu, jumlah)
  };
  const countUp_3 = () => {
    setJumlah({...jumlah, count3: jumlah.count3 + 1})
    handleCalculation(menu, jumlah)
  };
  const countDown_3 = () => {
    setJumlah({...jumlah, count3: jumlah.count3 - 1})
    handleCalculation(menu, jumlah)
  };
    
  const handleChangeAsupan = (e) => {
    e.preventDefault()
    const { name } = e.target
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    setMenu({
          ...menu,
          [name]: Number(value)
      }, handleCalculation(menu, jumlah)
    )
    console.log(menu)
    console.log(jumlah)
  };

  useEffect(() => {
    if (jumlah.count1 !== 0 || jumlah.count2 !== 0 || jumlah.count3 !== 0)
    console.log(jumlah);
});
/*    componentDidMount() {
        alert("Silahkan melanjutkan ke pemesanan dan pembayaran")
    }
    componentWillUnmount() {
        return window.confirm('Apa Anda ingin menutup layar pemesanan?');
    }*/
  
  return (
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="dark:text-white font-bold text-2xl tracking-tight text-gray-900">
              Daftar Pesanan
          </h2>
          <span className = "text-red-700">Sedang dalam pengembangan</span>
          <span className = "block text-red-700">Saat ini anda hanya bisa memesan maksimal 3 makanan.</span>
          <div>
              <div style={{ height: '75%' }}>
                  <div className='calculator'>
                      <div className='cart'>
                          <select className = "dark:text-white dark:bg-gray-700" onChange={handleChangeAsupan} name='pesanan1'>
                          <option value='0'>Pilih Makanan</option>
                          <Fragment>
                              {
                              daftar_makanan.makanan.map(makanan => {
                                  return (
                                  <option value={makanan[1]}>{makanan[0]}</option>
                                  )
                              })
                              }
                          </Fragment>
                          </select>
                          <div className = " mt-1 mb-3 grid grid-columns-3 justify-start gap-x-3">
                              <button onClick = {jumlah.count1 > 0 ? countDown_1:() => {}} className = "w-7 object-cover p-1 col-start-1 bg-green-500 rounded-full text-sm font-bold text-white">-</button>
                              <p className = "dark:text-white col-start-2 text-lg dark:text-white">{jumlah.count1}</p>
                              <button onClick = {countUp_1} name = "count1" className = "w-7 object-cover p-1 col-start-3 bg-green-500 rounded-full text-sm text-white">+</button>
                          </div>
                          <h3 className = "dark:text-white">+</h3>
                          <select className = "dark:text-white dark:bg-gray-700" onChange={handleChangeAsupan} name='pesanan2'>
                          <option value='0'>Pilih Makanan</option>
                          <Fragment>
                              {
                              daftar_makanan.makanan.map(makanan => {
                                  return (
                                  <option value={makanan[1]}>{makanan[0]}</option>
                                  )
                              })
                              }
                          </Fragment>
                          </select>
                          <div className = "mt-1 mb-3 grid grid-columns-3 justify-start gap-x-3">
                              <button onClick ={jumlah.count2 > 0 ? countDown_2:() => {}} className = "w-7 object-cover p-1 col-start-1 bg-green-500 rounded-full text-sm font-bold text-white">-</button>
                              <p className = "dark:text-white col-start-2 text-lg">{jumlah.count2}</p>
                              <button onClick = {countUp_2} className = "w-7 object-cover p-1 col-start-3 bg-green-500 rounded-full text-sm text-white">+</button>
                          </div>
                          <h3 className = "dark:text-white">+</h3>
                          <select className = "dark:text-white dark:bg-gray-700" onChange={handleChangeAsupan} name='pesanan3'>
                          <option value='0'>Pilih Makanan</option>
                          <Fragment>
                              {
                              daftar_makanan.makanan.map(makanan => {
                                  return (
                                  <option value={makanan[1]}>{makanan[0]}</option>
                                  )
                              })
                              }
                          </Fragment>
                          </select>
                          <div className = "mt-1 mb-3 grid grid-columns-3 justify-start gap-x-3">
                              <button onClick = {jumlah.count3 > 0 ? countDown_3:() => {}} className = "w-7 object-cover p-1 col-start-1 bg-green-500 rounded-full text-sm font-bold text-white">-</button>
                              <p className = "dark:text-white col-start-2 text-lg">{jumlah.count3}</p>
                              <button onClick = {countUp_3} className = "w-7 object-cover p-1 col-start-3 bg-green-500 rounded-full text-sm text-white">+</button>
                          </div>
                          <h3 className = "dark:text-white">=</h3>
                          <h2 className = "dark:text-white">Total Bayar: Rp.{totalpesanan}</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

