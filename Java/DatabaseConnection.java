import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static Connection connection;

    private DatabaseConnection() {
    }

    public static Connection getConnection() {
        if (connection == null) {
            try {
                String url = "jdbc:postgresql://fanny.db.elephantsql.com:5432/jnvgnqqv";
                String user = "jnvgnqqv";
                String password = "aTo0Yykrx9nCmRavmYFsikv_usQtfOen";

                Class.forName("org.postgresql.Driver");
                connection = DriverManager.getConnection(url, user, password);
            } catch (ClassNotFoundException | SQLException e) {
                e.printStackTrace();
            }
        }
        return connection;
    }
}
