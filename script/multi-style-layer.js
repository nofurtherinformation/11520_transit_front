!(function () {
    var yes = function () { return true; };

    L.GeoJSON.BaseStyle = L.GeoJSON.extend({
        options: {
            styles: [
                {color: 'black', opacity: 0, weight: 50},
                {color: 'white', opacity: 1, weight: 4}
            ]
        },

        addData: function(data) {
            if (!this._isAdding) {
                this._isAdding = true;
                if (this.options.styles) {
                    var styler = this.options.style,
                        filter = this.options.filter;
                    this.options.styles.forEach(L.bind(function(style, i) {
                        this.options.style = style;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                if (this.options.pointToLayers) {
                    this.options.pointToLayers.forEach(L.bind(function(pointToLayer, i) {
                        this.options.pointToLayer = pointToLayer;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                this.options.style = styler;
                this.options.filter = filter;
                this._isAdding = false;
            } else {
                L.GeoJSON.prototype.addData.call(this, data);
            }
        }
    });

    L.geoJson.BaseStyle = function(data, options) {
        return new L.GeoJSON.BaseStyle(data, options);
    }
})();
!(function () {
    var yes = function () { return true; };

    L.GeoJSON.mainStyle = L.GeoJSON.extend({
        options: {
            styles: [
                {color: 'black', opacity: 0, weight: 50},
                {color: '#F2FE3F', opacity: 1, weight: 4}
            ],
            className: 'animated_route_reverse'
        },

        addData: function(data) {
            if (!this._isAdding) {
                this._isAdding = true;
                if (this.options.styles) {
                    var styler = this.options.style,
                        filter = this.options.filter;
                    this.options.styles.forEach(L.bind(function(style, i) {
                        this.options.style = style;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                if (this.options.pointToLayers) {
                    this.options.pointToLayers.forEach(L.bind(function(pointToLayer, i) {
                        this.options.pointToLayer = pointToLayer;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                this.options.style = styler;
                this.options.filter = filter;
                this._isAdding = false;
            } else {
                L.GeoJSON.prototype.addData.call(this, data);
            }
        }
    });

    L.geoJson.mainStyle = function(data, options) {
        return new L.GeoJSON.mainStyle(data, options);
    }
})();
!(function () {
    var yes = function () { return true; };

    L.GeoJSON.passivePair = L.GeoJSON.extend({
        options: {
            styles: [
                {color: 'black', opacity: 0, weight: 50},
                {color: '#3FFEEB', opacity: 1, weight: 4}
            ]
        },

        addData: function(data) {
            if (!this._isAdding) {
                this._isAdding = true;
                if (this.options.styles) {
                    var styler = this.options.style,
                        filter = this.options.filter;
                    this.options.styles.forEach(L.bind(function(style, i) {
                        this.options.style = style;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                if (this.options.pointToLayers) {
                    this.options.pointToLayers.forEach(L.bind(function(pointToLayer, i) {
                        this.options.pointToLayer = pointToLayer;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                this.options.style = styler;
                this.options.filter = filter;
                this._isAdding = false;
            } else {
                L.GeoJSON.prototype.addData.call(this, data);
            }
        }
    });

    L.geoJson.passivePair = function(data, options) {
        return new L.GeoJSON.passivePair(data, options);
    }
})();


!(function () {
    var yes = function () { return true; };

    L.GeoJSON.activePair = L.GeoJSON.extend({
        options: {
            styles: [
                {color: 'black', opacity: 0, weight: 50},
                {color: '#3FFEEB', opacity: 1, weight: 4}
            ],
            
            className: 'animated_route'
        },

        addData: function(data) {
            if (!this._isAdding) {
                this._isAdding = true;
                if (this.options.styles) {
                    var styler = this.options.style,
                        filter = this.options.filter;
                    this.options.styles.forEach(L.bind(function(style, i) {
                        this.options.style = style;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                if (this.options.pointToLayers) {
                    this.options.pointToLayers.forEach(L.bind(function(pointToLayer, i) {
                        this.options.pointToLayer = pointToLayer;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                this.options.style = styler;
                this.options.filter = filter;
                this._isAdding = false;
            } else {
                L.GeoJSON.prototype.addData.call(this, data);
            }
        }
    });

    L.geoJson.activePair = function(data, options) {
        return new L.GeoJSON.activePair(data, options);
    }
})();