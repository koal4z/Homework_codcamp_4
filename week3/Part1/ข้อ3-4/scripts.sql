CREATE TABLE PARTS (
	part_name varchar(255),
    product_id int
);

CREATE TABLE PRODUCTS (
	product_id int,
    price CHAR(255)
);

INSERT INTO PARTS (part_name,product_id)
VALUES("WIRE",10),("MAGENETS",10),("BLADES",205),("PLASTIC",30),("OIL",160);

INSERT INTO PRODUCTS (product_id,price)
VALUES(505,3.7),(10,45.75),(205,18.9),(30,7.55);

SELECT *  FROM PARTS;
SELECT *  FROM PRODUCTS;
/*DROP TABLE PRODUCTS;*/

/*4-a*/
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price
FROM PARTS
LEFT JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id;

/*4-b*/
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price
FROM PARTS
RIGHT JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id;

/*5-b*/
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price FROM PARTS
LEFT JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id
UNION
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price FROM PARTS
RIGHT JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id;

/*6-b*/
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price
FROM PARTS
INNER JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id;
