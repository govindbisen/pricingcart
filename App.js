import "./style.css";


function App() {
  return (
    <div class = "superparent">
      <Card status = "Free" Price ="0"/>
      <Card status = "Plus" Price ="9"/>
      <Card status = "Pro" Price ="49"/>
   </div>
  );
}
export default App;

function Card(props){
  return(
    <div className="Card-parent">
        <header className="card-header"> <div>{props.status}</div> <p> ${props.Price}/<sub>month </sub> </p>   </header>
        <div className = "content">
        <div>✓ Single User</div>
        <div>✓ 5GB Storage</div>
        <div>✓ Unlimited Public Projects</div>
        <div>✓ Community Access</div>
        <div>✓ Unlimited Private Projects</div>
        <div>✓ Dedicated Phone Support</div>
        <div>✕ Free Subdomain </div>
        <div>✕ Monthly Status Reports</div>  
      </div>
      <button type="submit" class="btn">BUTTON</button>
    </div>
  )
}

// https://startbootstrap.com/snippets/pricing-table 