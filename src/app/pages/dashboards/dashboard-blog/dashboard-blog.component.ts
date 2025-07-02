import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FeatherIconsModule } from 'src/app/shared-modules/feather-icons.module';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-dashboard-blog',
  standalone: true,
  imports: [SharedModule, CommonModule, NgApexchartsModule, SimplebarAngularModule, FeatherIconsModule],
  templateUrl: './dashboard-blog.component.html',
  styleUrl: './dashboard-blog.component.scss'
})
export class DashboardBlogComponent {
  breadCrumbItems!: Array<{}>;
  barChart: any;
  multipleRadialbarChart: any;
  customAngleChart: any;
  gradientCircleChart: any;
  strokedCircleChart: any;
  radialbarsChart: any;


  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Apexcharts' },
      { label: 'Radialbar Charts', active: true }
    ];

    // Chart Color Data Get Function
    this._basic('["--vz-primary"]');
    this._device('["--vz-primary", "--vz-success", "--vz-warning"]');
  }

  private _basic(colors: any) {
    const chartColumnDatatalabelColors = this.getChartColorsArray(colors);
    this.barChart = {
      chart: {
        height: 262,
        type: 'bar',
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#adb5bd"]
        }
      },
      series: [{
        name: 'Visitors',
        data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8]
      }],
      colors: chartColumnDatatalabelColors,
      grid: {
        borderStyle: 'dashed'
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
      },
      fill: {
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: string) {
            return val + "%";
          }
        }
      },
    }

    const attributeToMonitor = 'data-theme';

    const observer = new MutationObserver(() => {
      this._basic('["--vz-primary"]');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [attributeToMonitor]
    });
  }
  private _device(colors: any) {
    let chartPieGradientColors = this.getChartColorsArray(colors);
    this.gradientCircleChart = {
      series: [44, 55, 24],
      chart: {
        height: 255,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      labels: ["Desktop", "Mobile", "Laptop"],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
        position: 'bottom' // Merged the 'position' property here
      },
      colors: chartPieGradientColors
    };


    const attributeToMonitor = 'data-theme';

    const observer = new MutationObserver(() => {
      this._basic('["--vz-primary"]');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [attributeToMonitor]
    });
  }

  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }


}
