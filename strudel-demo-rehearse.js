// VIZ
await initHydra()

voronoi(8, 2, 2).modulate(o0,1).add(o0,0.8).scrollY(-0.02).scale(1).modulate(noise(8,1),0.008).luma(0.3).saturate(0.2).color(0,1).out()

// Let's start with a beat I can't stop thinking about

$: stack(s("bd*5 white bd*5").distort(slider(9.7,0,10)).room(2.2), s("hh*3 pink pink hh*3").gain(2.3))

// Docs random example 

$: s("[bd sd sd] hh*5").room("<0.3 0.6>").density("<0.01 0.04 0.2 0.5>".slow(2)).fast(2).loopAt(2)
