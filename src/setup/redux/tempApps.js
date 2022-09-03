// TODO: DELETE
const generateNumber = (max) => Math.floor(Math.random() * (max + 1));

const randomImages = [
    "https://play-lh.googleusercontent.com/qyfXLNVM_cLm8NkYX7ZtNBPPnBmu1OJj0nFkaZvAg3HAFf8EzsGuwP_cNvZ6uneTEQI=w480-h960-rw",
    "https://wallpaperaccess.com/full/1933166.jpg",
    "https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTM4MjA0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1618108571494-7065bc619e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVycGxlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1517504734587-2890819debab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVycGxlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1622571887863-05410f44c014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHVycGxlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2BAhJizWdK2DHj3kvxRc2I3sc51cyjILlw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfMBTs1AGYCpOKtjbM6YkLRysuH_OTL0ywg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHxvKUNrAjhBVlaodBWMKL_gAXP16LPjzBg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItYHaZNDI4FP4Fro_0G117flBNorc3Q6qxg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Nc54Uic77P_exlm-BXIB-dXNdCquRi_y5kYRp_TgWlGx2O2JDJkU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqbLG2ONPoYA9jca0N6Su_JkYKQYtSK2lHg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpToitqBNPd1Ge01Uwa5p5VLVaPf3IsdSZA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSss91KiuwZmVs7pSyDVIdcGkE2E0A-mkYbRQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq_jEx9r0953r5f4JW-Bo669ZyJ372xz73w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DkjpUcIXV26sk2-McoVyt9fKIZHFmOE4Tw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXEUGV1QV8xLKhC32qYeiB9nMVZbPUBheyQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhATwveZjypsGrGWgIrNO4iSuj5HYvSjubQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5riTjTOR_ms9Sv9VmZs_BqayyXgsN5QLUA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4mA0qjKwugBM-PPilGd0iXvr9Z-nnOGdMg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZDwLhB5N1bq9JttK2zlOoHGL1OFvje918g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHv7qt2JjVdxfEtR5A9UU3Iayt9LNFkwefrA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9zkman_qt8M2B283xt5l6slkpnUJp7uFJQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXt0XZP7IhWS63t-0IDL0NVXTO0L97v_9VRw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdcjP7p_sKEJvsf1dqX7QR4dDTJ9B7mXSkA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLXhBN0WzF70Vr-HEbNrrZ6Gxk3oBlBAkTQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFro9nDpzQ0IBtSj9iGk2OlbgXTLwo2e-6g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstZ56V-8_VbKfqR-oK9GnGh5KsSHIjdjf9Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzdzViydNQa7-2Cakl2ciAyEePnmnzdK0qg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm61-RQfdbX997Jg-OInZkqNlCgAReC-XhA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sjByMKRRsXuXuVa31aj6gTJSRS0EJy_MXQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7M3L4zG-uJZScnPbhFwCQqCgMp3pa5P61g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrEkEEV9lrZf5c1i5suOc3AytMWD7Z7t2AQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDThPabussHW9f4RTV1aVkXGuVRwd8a6y0eQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gwIhAsftLHsF26Dj9fp9Jjrq2y4Ndjavbw&usqp=CAU",
];

const names = [
    "healthy",
    "manner",
    "abuse",
    "parameter",
    "screen",
    "screen",
    "role",
    "sympathetic",
    "skate",
    "bin",
    "difficulty",
    "confront",
    "essay",
    "empire",
    "permission",
    "vigorous",
    "issue",
    "pole",
    "death",
    "replacement",
    "trend",
    "call",
    "wonder",
    "steward",
    "claim",
    "doubt",
    "allocation",
    "insurance",
];

const apps = [];

const numOfApps = generateNumber(50);


export default Array(numOfApps)
    .fill(0)
    .map(() => {
        const collection = [];
        const numberOfCollection =
        2;
        // generateNumber(30);

        for (let i = 0; i < numberOfCollection; i++) {
            const randomImageNumber = generateNumber(randomImages.length);
            const randomImage = randomImages[randomImageNumber];
            collection.push({
                baseUrl: randomImage,
                description: 'HdsdsdsENLO fds fsfs df sfdf s fsd fss ffds  sfOOf  f d   O :D e 🤗',
            });
        }

        const nameNumber = generateNumber(names.length - 1);
        return {
            name: names[nameNumber],
            collection,
        };
    });
