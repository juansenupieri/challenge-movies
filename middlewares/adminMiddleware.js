
    function adminMiddleware ( req , res, next) { if (req.session.usuarioLogueado.rol == 1){
        next();
        } else {
        res.render('admin')
    }
} ;

module.exports = adminMiddleware;