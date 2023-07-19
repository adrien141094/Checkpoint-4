
DROP TABLE IF EXISTS preparation_to_order;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username varchar(100) NOT NULL,
  mail varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  admin TINYINT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE articles (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  info varchar(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  color varchar(100) NOT NULL,
  description longtext NOT NULL,
  stock INTEGER NOT NULL,
  categorie varchar(100) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE pictures (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  src varchar(255) NOT NULL,
  alt varchar(100) NOT NULL,
  article_id INT NOT NULL,
  CONSTRAINT fk_article_id FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE orders (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  status varchar(255) NOT NULL,
  adress VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  countrie VARCHAR(255) NOT NULL,
  postal_code MEDIUMINT NOT NULL,
  coupon_code DECIMAL(10,2),
  user_id INT NOT NULL,
  CONSTRAINT fk_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE preparation_to_order (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  order_id INT NOT NULL,
  CONSTRAINT fk_orders_id FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  article_id INT NOT NULL,
  CONSTRAINT fk_articles_id FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO users (username, mail, password, admin) VALUES ('Bob', 'bob@test.com', 'motdepasse', false);
INSERT INTO users (username, mail, password, admin) VALUES ('Billy', 'billy@test.com', 'motdepasse2', false);
INSERT INTO users (username, mail, password, admin) VALUES ('Admin', 'admin@test.com', 'admin', TRUE);


INSERT INTO articles (title, info, price, color, description, stock, categorie) VALUES ('Power Rope 2.0', 'en fibre de carbone', 59.90, 'noir','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quam animi dolores dolorem voluptatem quos harum libero blanditiis tempora repellat fugiat est earum deserunt atque beatae, doloribus alias veritatis. Assumenda mollitia distinctio ea maiores, magni tempora consequuntur explicabo obcaecati. Inventore tempore soluta officiis, maiores porro ipsum laudantium? Quod nihil recusandae nobis error temporibus, accusantium fuga id amet saepe facere harum voluptas pariatur, exercitationem iste reprehenderit! Nostrum, ipsam. Minus praesentium optio deserunt, molestiae corporis officia quis repudiandae quo ratione nesciunt esse similique, aliquam aliquid, unde cupiditate est veniam voluptas animi ab maiores deleniti! Iusto minima accusantium cupiditate veritatis est, maxime laudantium.', 8, 'corde à sauter');
INSERT INTO articles (title, info, price, color, description, stock, categorie) VALUES ('Speed Rope 3.0', 'en fibre de carbone', 39.90, 'rouge','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quam animi dolores dolorem voluptatem quos harum libero blanditiis tempora repellat fugiat est earum deserunt atque beatae, doloribus alias veritatis. Assumenda mollitia distinctio ea maiores, magni tempora consequuntur explicabo obcaecati. Inventore tempore soluta officiis, maiores porro ipsum laudantium? Quod nihil recusandae nobis error temporibus, accusantium fuga id amet saepe facere harum voluptas pariatur, exercitationem iste reprehenderit! Nostrum, ipsam. Minus praesentium optio deserunt, molestiae corporis officia quis repudiandae quo ratione nesciunt esse similique, aliquam aliquid, unde cupiditate est veniam voluptas animi ab maiores deleniti! Iusto minima accusantium cupiditate veritatis est, maxime laudantium.', 10, 'corde à sauter');
INSERT INTO articles (title, info, price, color, description, stock, categorie) VALUES ('Fire Rope 3.0', 'en fibre de carbone', 49.90, 'jaune','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quam animi dolores dolorem voluptatem quos harum libero blanditiis tempora repellat fugiat est earum deserunt atque beatae, doloribus alias veritatis. Assumenda mollitia distinctio ea maiores, magni tempora consequuntur explicabo obcaecati. Inventore tempore soluta officiis, maiores porro ipsum laudantium? Quod nihil recusandae nobis error temporibus, accusantium fuga id amet saepe facere harum voluptas pariatur, exercitationem iste reprehenderit! Nostrum, ipsam. Minus praesentium optio deserunt, molestiae corporis officia quis repudiandae quo ratione nesciunt esse similique, aliquam aliquid, unde cupiditate est veniam voluptas animi ab maiores deleniti! Iusto minima accusantium cupiditate veritatis est, maxime laudantium.', 5, 'corde à sauter');


INSERT INTO pictures (src, alt, article_id) VALUES ('https://contents.mediadecathlon.com/p1748400/k$2c83072729c27929ee5679fc1a0188a0/corde-a-sauter-de-vitesse-noire.jpg?format=auto&quality=40&f=800x800', 'corde a sauter noir', 1);
INSERT INTO pictures (src, alt, article_id) VALUES ('https://wodaddict.shop/5165-large_default/rpm-session-4-original-corde-a-sauter-rouge-rpm.jpg', 'corde a sauter rouge', 2);
INSERT INTO pictures (src, alt, article_id) VALUES ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6erQGzoP3mIu-xugntbw7TbD3q1k4U2eeg&usqp=CAU', 'corde a sauter jaune', 3);



INSERT INTO orders (status, adress, city, countrie, postal_code, coupon_code, user_id) VALUES ( 'en attente', '45 rue du code', 'Clermont', 'France', 63000, 0, 1);
INSERT INTO orders (status, adress, city, countrie, postal_code, coupon_code, user_id) VALUES ( 'vide', '856 avenue de la gare', 'Paname', 'France', 75000, 0, 2);
INSERT INTO orders (status, adress, city, countrie, postal_code, coupon_code, user_id) VALUES ( 'en attente', '3 rue de la tong', 'Poitier-beach', 'France', 86000, 0, 3);

INSERT INTO preparation_to_order ( order_id, article_id) VALUES (1, 1), (1, 2), (2, 2), (3, 3);