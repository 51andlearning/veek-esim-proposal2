import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { businessCase } from "@/content/proposal";

type Table = { headers: string[]; rows: string[][] };

function DataTable({ table }: { table: Table }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {table.headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-semibold text-muted-foreground first:rounded-tl-xl last:rounded-tr-xl"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => {
            const isTotal = row[0]?.toString().startsWith("5-yr");
            return (
              <tr
                key={ri}
                className={
                  "border-b border-border/60 last:border-0 " +
                  (isTotal ? "bg-muted/40 font-semibold" : "")
                }
              >
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function BusinessCase() {
  return (
    <section id="business-case" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{businessCase.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{businessCase.subtitle}</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {businessCase.inputs.map((i) => (
            <Card key={i.label} className="border-border/60">
              <CardContent className="p-4">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{i.label}</div>
                <div className="mt-1 font-semibold leading-snug">{i.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="revenue" className="mt-10">
          <TabsList className="flex flex-wrap h-auto">
            <TabsTrigger value="penetration">Penetration</TabsTrigger>
            <TabsTrigger value="purchasers">Purchasers</TabsTrigger>
            <TabsTrigger value="revenue">Subscriber revenue</TabsTrigger>
            <TabsTrigger value="net">Veek net contribution</TabsTrigger>
          </TabsList>
          <TabsContent value="penetration" className="mt-6">
            <DataTable table={businessCase.penetration} />
            <p className="mt-3 text-sm text-muted-foreground">% of active Veek base purchasing ≥1 travel eSIM bundle in the year.</p>
          </TabsContent>
          <TabsContent value="purchasers" className="mt-6">
            <DataTable table={businessCase.purchasers} />
            <p className="mt-3 text-sm text-muted-foreground">Annual travel-eSIM purchasers. Base grows at +5% YoY from 5M in Yr 1.</p>
          </TabsContent>
          <TabsContent value="revenue" className="mt-6">
            <DataTable table={businessCase.revenue} />
            <p className="mt-3 text-sm text-muted-foreground">Subscriber revenue at ~$18.07 ARPU per 5GB bundle (ex VAT).</p>
          </TabsContent>
          <TabsContent value="net" className="mt-6">
            <DataTable table={businessCase.netContribution} />
            <p className="mt-3 text-sm text-muted-foreground">Veek net contribution at 40% net margin (illustrative). {businessCase.sensitivity}</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
