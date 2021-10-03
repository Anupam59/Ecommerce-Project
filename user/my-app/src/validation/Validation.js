
class Validation{
    static NameRegx=/^[A-Za-z\'\s\.\:\-]+$/;
    static MobileRegx=/^(?:\+?88|0088)?01[15-9]\d{8}$/;
    static PasswordRegx=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
}
export default Validation;