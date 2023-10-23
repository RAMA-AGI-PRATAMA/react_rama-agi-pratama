import Label from "../atom/Label";

const Productcategory = ({name,title, className, value, onChange}) => {
    return (
    <div className="d-flex flex-column mt-4" style={{width:'20%'}}>
        <Label htmlFor={name} title={title}/>
        <select className={className} name={name} id={name} value={value} onChange={onChange}>
            <option value="">Silahkan Pilih...</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Sport">Sport</option>
            <option value="Gadget">Gadget</option>
        </select>
    </div>
    )
}
export default Productcategory