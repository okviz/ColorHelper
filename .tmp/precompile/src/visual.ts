/*
 *  Color Helper by OKViz
 *  v1.0.0
 *
 *  Copyright (c) SQLBI. OKViz is a trademark of SQLBI Corp.
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C  {
     interface VisualViewModel {
        dataPoints: VisualDataPoint[];
        dataMax: number;
        settings: VisualSettings;
    }

    interface VisualDataPoint {
        value: number;
        category: string;
        color: string;
        selectionId: any; //ISelectionId;
    }

    interface VisualSettings {
        dataPoint: {
    
        }
    }

    function defaultSettings(): VisualSettings {
        return {
            dataPoint: {
  
            }
        };
    }

    function visualTransform(options: VisualUpdateOptions, host: IVisualHost): VisualViewModel {

        //Get DataViews
        var dataViews = options.dataViews;
        var hasDataViews = (dataViews && dataViews[0]);
        var hasCategoricalData = (hasDataViews && dataViews[0].categorical && dataViews[0].categorical.categories && dataViews[0].categorical.categories[0].source && dataViews[0].categorical.values);
        var hasSettings = (hasDataViews && dataViews[0].metadata && dataViews[0].metadata.objects);

        var dataMax = 0;
        //var colorPalette: IColorPalette = createColorPalette(host.colors).reset();

        //Get Settings
        var settings: VisualSettings = defaultSettings();
        if (hasSettings) {
            var objects = dataViews[0].metadata.objects;
            settings = {
                dataPoint: {
  
                }
            }
        }

        //Get DataPoints
        var dataPoints: VisualDataPoint[] = [];
        if (hasCategoricalData) {
            var category = dataViews[0].categorical.categories[0];
            var dataValue = dataViews[0].categorical.values[0];
            for (let i = 0; i < Math.max(category.values.length, dataValue.values.length); i++) {
                let defaultColor: Fill = {
                    solid: {
                        color: host.colorPalette.getColor(<string>category.values[i]).value
                    }
                }

                dataPoints.push({
                    category: <string>category.values[i],
                    value: <number>dataValue.values[i],
                    color: getCategoricalObjectValue<Fill>(category, i, 'dataPoint', 'fill', defaultColor).solid.color,
                    selectionId: host.createSelectionIdBuilder()
                        .withCategory(category, i)
                        .createSelectionId()
                });
            }

            dataMax = <number>dataValue.maxLocal;
        }

        return {
            dataPoints: dataPoints,
            dataMax: dataMax,
            settings: settings,
        };
    }

    export class Visual implements IVisual {
        private host: IVisualHost;
        private selectionManager: ISelectionManager;
        private model: VisualViewModel;

        private element: HTMLElement;
        private svg: d3.Selection<SVGElement>;
        private chartContainer: d3.Selection<SVGElement>;
        private xAxis: d3.Selection<SVGElement>;

        private dropdown: JQuery;

        constructor(options: VisualConstructorOptions) {
            this.host = options.host;
            this.selectionManager = options.host.createSelectionManager();
            this.model = { dataPoints: [], dataMax:0, settings: <VisualSettings>{} };

            this.element = options.element;

            let filter = $('<svg id="filter"><defs><filter id="normal"><feColorMatrix values="1 0 0 0 0				0 1 0 0 0				0 0 1 0 0				0 0 0 1 0"/></filter><filter id="protanopia" color-interpolation-filters="sRGB"><feColorMatrix values="0.152286 1.052583 -0.204868 0 0				0.114503 0.786281 0.099216 0 0				-0.003882 -0.048116 1.051998 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="protanomaly" color-interpolation-filters="sRGB"><feColorMatrix values="0.458064 0.679578 -0.137642 0 0				0.092785 0.846313 0.060902 0 0				-0.007494 -0.016807 1.024301 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="deuteranopia" color-interpolation-filters="sRGB"><feColorMatrix values="0.367322 0.860646 -0.227968 0 0				0.280085 0.672501 0.047413 0 0				-0.011820 0.042940 0.968881 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="deuteranomaly" color-interpolation-filters="sRGB"><feColorMatrix values="0.547494 0.607765 -0.155259 0 0				0.181692 0.781742 0.036566 0 0				-0.010410 0.027275 0.983136 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="tritanopia" color-interpolation-filters="sRGB"><feColorMatrix values="1.255528 -0.076749 -0.178779 0 0				-0.078411 0.930809 0.147602 0 0				0.004733 0.691367 0.303900 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="tritanomaly" color-interpolation-filters="sRGB"><feColorMatrix values="1.017277 0.027029 -0.044306 0 0				-0.006113 0.958479 0.047634 0 0				0.006379 0.248708 0.744913 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="achromatopsia" color-interpolation-filters="sRGB"><feColorMatrix values="0.212656 0.715158 0.072186 0 0				0.212656 0.715158 0.072186 0 0				0.212656 0.715158 0.072186 0 0				0 0 0 1 0"/><feColorMatrix type="saturate" values="0" color-interpolation-filters="sRGB"/><feComponentTransfer><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/><feFuncB type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="achromatomaly" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0.5"/><feComponentTransfer><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/><feFuncB type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="low-contrast" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope=".5" intercept=".25"/><feFuncG type="linear" slope=".5" intercept=".25"/><feFuncB type="linear" slope=".5" intercept=".25"/></feComponentTransfer></filter></defs></svg>');

            filter.appendTo(this.element);
            
            let diseases = [
                'Protanopia',
                'Protanomaly',
                'Deuteranopia',
                'Deuteranomaly',
                'Tritanopia',
                'Tritanomaly',
                'Achromatopsia',
                'Achromatomaly'
            ];

            this.dropdown = $('<div />').addClass('dropdown').attr('drag-resize-disabled', 'true').appendTo(this.element);
            let selectBox = $('<select />');
            $('<option value="">Normal vision</option>').appendTo(selectBox);
            for (let i = 0; i < diseases.length; i++){
                let disease = diseases[i];
                $('<option value="' + i + '">' + diseases[i] + '</option>').appendTo(selectBox);
            }
            var self = this;
            selectBox.on('change', function(e){
                e.preventDefault();
                let urlWithFilterId = '';
                let diseaseIndex = $(this).val();
                if (diseaseIndex != '') urlWithFilterId = 'url(#' + diseases[parseInt(diseaseIndex)].toLowerCase() + ')';

                $('.arc').css({
                    'filter': urlWithFilterId,
                    '-webkit-filter': urlWithFilterId
                });

            });
            selectBox.appendTo(this.dropdown);

            this.svg = d3.select(this.element)
                .append('svg')
                .classed('chart', true);

        }
        
        public update(options: VisualUpdateOptions) {

            this.model = visualTransform(options, this.host);

            let width = options.viewport.width;
            let height = options.viewport.height;

            //Calculate radius
            let hw = height / width;
            let denom = 2 + (1 / (1 + Math.exp(-5 * (hw - 1))));
            let radius = Math.min(height, width) / denom;

            d3.selectAll('g').remove();

            let svg = this.svg
                .attr({
                    width: width,
                    height: height
                })
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            let color = d3.scale.ordinal()
                .range(this.model.dataPoints.map(d => d.color));

            let arc = d3.svg.arc()
                .outerRadius(radius * 0.8)
                .innerRadius(radius * 0.45);
            
            let outerArc = d3.svg.arc()
                .outerRadius(radius * 0.8)
                .innerRadius(radius * 0.9);
                

            let pie = d3.layout.pie()
                .sort(null)
                .value(function(d: any){ return d.value; });

            let g = svg.selectAll(".arc")
                .data(pie(<any>this.model.dataPoints))
                .enter().append("g")
                .attr("class", "arc");


            let polyline = g.append("polyline");
	            polyline.transition().duration(0)
                .attrTween("points", <any>function(d: any){
                    this._current = this._current || d;
                    var interpolate = d3.interpolate(this._current, d);
                    this._current = interpolate(0);
                    return function(t) {
                        var d2 = interpolate(t);
                        var pos = outerArc.centroid(<any>d2);
                        pos[0] = radius * 0.85 * (midAngle(d2) < Math.PI ? 1 : -1);
                        return [arc.centroid(<any>d2), outerArc.centroid(<any>d2), pos];
                    };			
                });
	

            g.append("path")
                .attr("d", <any>arc)
                .style("fill", function(d: any) { return d.data.color });

             let text = g.append("text")
                .attr("transform", function(d: any) { return "translate(" + arc.centroid(d) + ")"; })
                .attr("dy", ".35em")
                .style({
                    "font-size" : "11px",
                    "fill": "#777",
                    "font-family": "wf_standard-font,helvetica,arial,sans-serif"
                })
                .text(function(d: any) { return d.data.category; });
            
            function midAngle(d){
                return d.startAngle + (d.endAngle - d.startAngle)/2;
            }

            text.transition().duration(0)
            .attrTween("transform", function(d: any) {
                    this._current = this._current || d;
                    var interpolate = d3.interpolate(this._current, d);
                    this._current = interpolate(0);
                    return function(t) {
                        var d2 = interpolate(t);
                        var pos = outerArc.centroid(<any>d2);
                        pos[0] = radius * 0.9 * (midAngle(d2) < Math.PI ? 1 : -1);
                        return "translate("+ pos +")";
                    };
                })
                .styleTween("text-anchor", function(d){
                    this._current = this._current || d;
                    var interpolate = d3.interpolate(this._current, <any>d);
                    this._current = interpolate(0);
                    return function(t) {
                        var d2 = interpolate(t);
                        return midAngle(d2) < Math.PI ? "start":"end";
                    };
                });

            $('select', this.dropdown).trigger('change');

            OKVizUtility.t(['Color Helper', '1.0.0'], this.element, options, this.host);
        }

        public destroy(): void {
            //TODO: Perform any cleanup tasks here
        }

        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
            var objectName = options.objectName;
            var objectEnumeration: VisualObjectInstance[] = [];

            switch(objectName) {
                case 'dataPoint':

                    for(let dataPoint of this.model.dataPoints) {

                        objectEnumeration.push({
                            objectName: objectName,
                            displayName: dataPoint.category,
                            properties: {
                                fill: {
                                    solid: {
                                        color: dataPoint.color
                                    }
                                }
                            },
                            selector: dataPoint.selectionId.getSelector()
                        });
                    }

                    break;
                
            };

            return objectEnumeration;
        }
    }
}