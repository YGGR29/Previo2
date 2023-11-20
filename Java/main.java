public class Main {
    public static void main(String[] args) {
    
        UserDAO.insertUser("usuario1", "contrasena1", "usuario1@example.com");
        User user = UserDAO.getUserByUsername("usuario1");
        System.out.println(user);
    }
}
