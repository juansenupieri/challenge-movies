function guestMiddleware ( req , res, next) {
    if( req.session.usuarioLogueado != undefined) {
        next();
    } else {
        res.send("Para acceder a esta página debes estar logueado")
    }
} ;

module.exports = guestMiddleware;