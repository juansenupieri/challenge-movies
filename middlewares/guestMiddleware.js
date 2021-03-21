function guestMiddleware ( req , res, next) {
    if( req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.send("Ya te encuestras logueado!")
    }
} ;

module.exports = guestMiddleware;