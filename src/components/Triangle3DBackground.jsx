import React, { useEffect, useRef } from 'react';

const Triangle3DBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for 3D parallax tilt
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX - width / 2) * 0.0008;
      mouse.targetY = (e.clientY - height / 2) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Color palette matching portfolio (Cyan, Light Cyan, Indigo, Deep Sky)
    const colorThemes = [
      { stroke: 'rgba(56, 189, 248, 0.85)', fill: 'rgba(56, 189, 248, 0.12)', glow: '#38bdf8' },
      { stroke: 'rgba(103, 232, 249, 0.8)', fill: 'rgba(103, 232, 249, 0.1)', glow: '#67e8f9' },
      { stroke: 'rgba(129, 140, 248, 0.8)', fill: 'rgba(129, 140, 248, 0.12)', glow: '#818cf8' },
      { stroke: 'rgba(59, 130, 246, 0.75)', fill: 'rgba(59, 130, 246, 0.09)', glow: '#3b82f6' }
    ];

    // Create 3D Tetrahedrons (4 triangular faces) and 3D Flat Triangles
    const itemsCount = 42;
    const shapes = [];

    for (let i = 0; i < itemsCount; i++) {
      const isTetrahedron = i % 2 === 0;
      const baseSize = 24 + Math.random() * 48; // Base scale
      shapes.push({
        isTetrahedron,
        x: (Math.random() - 0.5) * width * 1.3,
        y: (Math.random() - 0.5) * height * 1.3,
        z: -150 + Math.random() * 500, // 3D depth
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        vz: (Math.random() - 0.5) * 0.5,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: (Math.random() - 0.5) * 0.02,
        vRotY: (Math.random() - 0.5) * 0.025,
        vRotZ: (Math.random() - 0.5) * 0.015,
        baseSize,
        sizeSpeed: 0.015 + Math.random() * 0.025,
        sizePhase: Math.random() * Math.PI * 2,
        sizeAmplitude: 0.35 + Math.random() * 0.35, // Size shifting multiplier
        theme: colorThemes[Math.floor(Math.random() * colorThemes.length)],
        pulse: Math.random() * Math.PI
      });
    }

    // 3D Matrix/Vector Math
    const rotateVertex = (v, rx, ry, rz) => {
      let { x, y, z } = v;

      // Rotate X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      let y1 = y * cosX - z * sinX;
      let z1 = y * sinX + z * cosX;

      // Rotate Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      let x2 = x * cosY + z1 * sinY;
      let z2 = -x * sinY + z1 * cosY;

      // Rotate Z
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);
      let x3 = x2 * cosZ - y1 * sinZ;
      let y3 = x2 * sinZ + y1 * cosZ;

      return { x: x3, y: y3, z: z2 };
    };

    // Camera FOV
    const fov = 420;

    let time = 0;

    const render = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      // Collect faces to draw with depth sorting (painter's algorithm)
      const renderQueue = [];

      shapes.forEach((shape) => {
        // Move in 3D
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.z += shape.vz;

        // Rotate in 3D
        shape.rotX += shape.vRotX;
        shape.rotY += shape.vRotY;
        shape.rotZ += shape.vRotZ;

        // Wrap around boundaries
        const boundX = width * 0.75;
        const boundY = height * 0.75;
        if (shape.x < -boundX) shape.x = boundX;
        if (shape.x > boundX) shape.x = -boundX;
        if (shape.y < -boundY) shape.y = boundY;
        if (shape.y > boundY) shape.y = -boundY;
        if (shape.z < -200) shape.z = 450;
        if (shape.z > 450) shape.z = -200;

        // Shift size over time dynamically
        const currentScale = shape.baseSize * (1 + shape.sizeAmplitude * Math.sin(time * shape.sizeSpeed + shape.sizePhase));

        // Generate geometry vertices
        let localVertices = [];
        let faces = [];

        if (shape.isTetrahedron) {
          // Regular Tetrahedron in 3D
          const s = currentScale * 0.8;
          localVertices = [
            { x: 0, y: -s * 1.15, z: 0 },
            { x: -s, y: s * 0.6, z: -s * 0.65 },
            { x: s, y: s * 0.6, z: -s * 0.65 },
            { x: 0, y: s * 0.6, z: s }
          ];
          faces = [
            [0, 1, 2],
            [0, 2, 3],
            [0, 3, 1],
            [1, 3, 2]
          ];
        } else {
          // 3D Flat Triangle
          const s = currentScale;
          const h = (s * Math.sqrt(3)) / 2;
          localVertices = [
            { x: 0, y: -h * 0.6, z: 0 },
            { x: -s * 0.5, y: h * 0.4, z: 0 },
            { x: s * 0.5, y: h * 0.4, z: 0 }
          ];
          faces = [[0, 1, 2]];
        }

        // Apply 3D rotation & mouse tilt
        const rotatedVertices = localVertices.map((v) => {
          return rotateVertex(
            v,
            shape.rotX + mouse.y * 1.5,
            shape.rotY + mouse.x * 1.5,
            shape.rotZ
          );
        });

        // Translate to world space and project to screen 2D
        const projectedVertices = rotatedVertices.map((v) => {
          const worldX = v.x + shape.x;
          const worldY = v.y + shape.y;
          const worldZ = v.z + shape.z + fov;

          const projScale = fov / Math.max(worldZ, 1);
          return {
            x: centerX + worldX * projScale,
            y: centerY + worldY * projScale,
            z: worldZ,
            scale: projScale
          };
        });

        // For each face, calculate depth and surface normal for 3D shading
        faces.forEach((faceIndices) => {
          const p0 = projectedVertices[faceIndices[0]];
          const p1 = projectedVertices[faceIndices[1]];
          const p2 = projectedVertices[faceIndices[2]];

          // Face normal Z-component for 2D backface culling / light calculation
          const normalZ = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);

          // If flat triangle, render two-sided; if tetrahedron, cull back faces
          if (!shape.isTetrahedron || normalZ > 0) {
            const avgZ = (p0.z + p1.z + p2.z) / 3;
            renderQueue.push({
              points: [p0, p1, p2],
              avgZ,
              theme: shape.theme,
              isTetrahedron: shape.isTetrahedron,
              normalZ: Math.abs(normalZ)
            });
          }
        });
      });

      // Sort faces from furthest to nearest (Painter's Algorithm for genuine 3D)
      renderQueue.sort((a, b) => b.avgZ - a.avgZ);

      // Render 3D faces
      renderQueue.forEach((face) => {
        const [p0, p1, p2] = face.points;
        const depthAlpha = Math.max(0.15, Math.min(1, 1 - (face.avgZ - fov) / 550));

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();

        // 3D face gradient fill
        const gradient = ctx.createLinearGradient(p0.x, p0.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        gradient.addColorStop(0, face.theme.fill);
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0.05)');

        ctx.fillStyle = gradient;
        ctx.globalAlpha = depthAlpha * 0.9;
        ctx.fill();

        // Glowing 3D wireframe edges
        ctx.strokeStyle = face.theme.stroke;
        ctx.lineWidth = Math.max(0.8, 1.8 * p0.scale);
        ctx.shadowColor = face.theme.glow;
        ctx.shadowBlur = 10 * p0.scale;
        ctx.globalAlpha = depthAlpha;
        ctx.stroke();

        // Little glowing vertex markers
        face.points.forEach((pt) => {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(1, 2.2 * pt.scale), 0, Math.PI * 2);
          ctx.fillStyle = face.theme.glow;
          ctx.globalAlpha = depthAlpha * 0.85;
          ctx.fill();
        });

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="triangle-3d-canvas" aria-hidden="true" />;
};

export default Triangle3DBackground;
