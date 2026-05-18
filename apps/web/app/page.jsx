const buildings = [
  {
    name: 'Sama Salalah - New Salalah',
    location: 'صلالة الجديدة - قريب ميدان الاحتفالات',
    units: [
      { name: 'شقة فاخرة غرفتين', price: '25 ريال / ليلة', features: ['مكيف مركزي', 'تلفزيون سمارت', 'مواقف سيارات'] },
      { name: 'شقة عائلية 3 غرف', price: '35 ريال / ليلة', features: ['كافة الخدمات تحت المبنى', 'مطبخ مجهز', 'قريبة من الخدمات'] }
    ]
  },
  {
    name: 'Sama Salalah - North Awqad',
    location: 'عوقد الشمالية - قريب دوار الدكتورة منى',
    units: [
      { name: 'غرفة فاخرة جديدة', price: '15 ريال / ليلة', features: ['أثاث جديد', 'واي فاي', 'موقع هادئ'] }
    ]
  }
];

export default function HomePage() {
  return (
    <main style={{fontFamily:'Arial', padding:24, direction:'rtl', background:'#f6f8fb', minHeight:'100vh'}}>
      <section style={{background:'linear-gradient(135deg,#0f766e,#2563eb)', color:'white', padding:32, borderRadius:20, marginBottom:24}}>
        <h1 style={{fontSize:36, margin:0}}>سما صلالة العقارية</h1>
        <p style={{fontSize:18}}>حجز شقق وغرف فاخرة في صلالة مع إمكانية الدفع الإلكتروني وتأكيد واتساب.</p>
      </section>
      <h2>البنايات والوحدات المتاحة</h2>
      <div style={{display:'grid', gap:18}}>
        {buildings.map((building)=>(
          <div key={building.name} style={{background:'white', padding:22, borderRadius:16, boxShadow:'0 6px 18px #0001'}}>
            <h3>{building.name}</h3>
            <p>{building.location}</p>
            <div style={{display:'grid', gap:12}}>
              {building.units.map((unit)=>(
                <div key={unit.name} style={{border:'1px solid #e5e7eb', borderRadius:14, padding:16}}>
                  <h4>{unit.name}</h4>
                  <strong>{unit.price}</strong>
                  <ul>{unit.features.map(f=><li key={f}>{f}</li>)}</ul>
                  <button style={{background:'#0f766e', color:'white', border:0, borderRadius:10, padding:'10px 18px'}}>احجز الآن</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}